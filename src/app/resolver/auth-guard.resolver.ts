import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const authGuard = () =>
  new Promise(async (res, rej) => {
    //Pegando as dependecias necessárias com inject
    const spotifyService = inject(SpotifyService);
    const router = inject(Router);

    //Função que lida quando o usuário não esta autenticado
    const notAuthenticated = () => {
      localStorage.clear();
      router.navigate(['/login']);
      rej('USUARIO NAO AUTENTICADO!');
      return false;
    };

    //Pegando o token no localStorage
    const token = localStorage.getItem('token');

    //Verificando se o token existe
    if (!token) {
      //Se não existir chama a função abaixo
      return notAuthenticated();
    }

    //Variável que armazena o valor que vem da função initializeUser
    const usuarioCriado = await spotifyService.initializeUser();
    //Verificando se o usuario é true
    if (usuarioCriado) res(true);
    else res(notAuthenticated());
    return false;
  });
