import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from '../interface/IUsuario';
import {
  getDataPlaylist,
  getDataUser,
  getTopArtists,
} from '../common/getDataUser';
import { IPlaylist } from '../interface/IPlaylist';
import { Router } from '@angular/router';
import { IArtists } from '../interface/IArtistas';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  //variável que incia a lib do spotify
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  //a interface é necessário, pois vamos pegar os dados do usuario da api e armazenar nessa variável
  usuario: IUsuario;

  constructor(private router: Router) {
    //Criando uma instância da lib do spotify
    this.spotifyApi = new Spotify();
  }

  // essa func é responsável por verificar se o usuário já está autenticado e para inicializar seus dados
  async initializeUser() {
    //Verifica se a Interface de usuário está preenchida
    if (!!this.usuario) {
      // variável que é do tipo IUsuario e armazena os dados
      return true;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      // Verifica se o token não existe e retorna false
      return false;
    }

    //Dentro do try catch é feito o get dos dados do usuário e o retorno do erro
    try {
      //Função que da autotorização para o usuário utilizar a API através do token
      this.definedAcessToken(token);
      //Esperando esse função Pegar os dados do usuario  - Por isso chamar o método acima é importante
      await this.getSpotifyUser();
      return !!this.usuario; // Retorna true se o this.usuario estiver preenchido e false se não
    } catch (error) {
      return error;
    }
  }
  //pegando os dados do usuário
  async getSpotifyUser() {
    //Pegando os dados do usuário pela api do spotify e armazendo na variával userInfo
    const userInfo = await this.spotifyApi.getMe(); // Pegando os dados do usuário - Um objeto com as propriedades
    console.log(userInfo);
    this.usuario = getDataUser(userInfo); // Armazenando dentro da variável this.usuáro a interface IUsuario preenchida
  }

  //Função que pega as playlits do usuário. Essa função é do tipo Promisse que é do tipo array de IPlaylist
  async getUserPlaylist(offset = 0, limit = 50): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, {
      offset,
      limit,
    });
    console.log(playlists);
    return playlists.items.map((item) => getDataPlaylist(item));
  }

  //Pegando os top 20 artistas do usuário
  async getArtistsUser(limit = 10): Promise<IArtists[]> {
    const artist = await this.spotifyApi.getMyTopArtists(limit);
    console.log(artist);
    return artist.items.map(getTopArtists);
  }

  //Função que concatena toda a url que leva para a página de autorização do spotify
  getUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  //Função que trata o token retornado do spotify na url
  getTokenUrlCallback() {
    console.log(window.location.hash);
    if (!window.location.hash) {
      return '';
    }

    //params é um array de string que pega o token depois do # e divide a string quando tiver &
    const params = window.location.hash.substring(1).split('&');
    console.log(params);
    //E retorna a string na posição 0 depois do sinal de = e na posição 1 do array
    return params[0].split('=')[1];
  }

  //função que define o acesso do usuário pelo token e salva no localStorage
  definedAcessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
