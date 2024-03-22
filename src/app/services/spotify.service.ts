import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from '../interface/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  //variável que incia a lib do spotify
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  //a interface é necessário, pois vamos pegar os dados do usuario da api
  usuario: IUsuario;

  constructor() {
    //Criando uma instância da lib do spotify
    this.spotifyApi = new Spotify();
  }

  // essa func é responsável por verificar se o usuário já está autenticado e inicializar seus dados, se necessário
  async initializeUser() {
    if (!!this.usuario) {
      return true;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.definedAcessToken(token);
      await this.getSpotifyUser();
      return true;
    } catch (error) {
      return error;
    }
  }

  //pega os dados do usuário
  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    console.log(userInfo);
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

  //função que define o acesso do usuário pelo token
  definedAcessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
