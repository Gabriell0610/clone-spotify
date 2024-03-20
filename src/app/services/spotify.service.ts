import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  //variável que armazena a lib do spotify
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    //Criando uma instância da lib do spotify
    this.spotifyApi = new Spotify();
  }

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

    const params = window.location.hash.substring(1).split('&');
    console.log(params);
    return params[0].split('=')[1];
  }

  //função que define o acesso do usuário pelo token
  definedAcessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
