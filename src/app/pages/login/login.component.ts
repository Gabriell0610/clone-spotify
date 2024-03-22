import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  //Quando o componente de login é iniciado ele da acesso ao usuario pelo token
  ngOnInit(): void {
    this.checkTokenUrlCallback();
  }

  //Função que verifica o token retornado do spotify, que salva no LocalStorage e seta na API
  checkTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback();
    //Verifica se o token não está em branco
    if (!!token) {
      this.spotifyService.definedAcessToken(token);
    }
  }

  //Função que leva para a página de autorização do spotify
  goToPageLogin() {
    window.location.href = this.spotifyService.getUrlLogin();
  }
}
