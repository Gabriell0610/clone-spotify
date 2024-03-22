import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const authGuard = () =>
  new Promise(async (res, rej) => {
    const spotifyService = inject(SpotifyService);
    const router = inject(Router);

    const notAuthentic = () => {
      localStorage.clear();
      router.navigateByUrl('/login');
      rej('USUARIO NAO AUTENTICADO!');
      return false;
    };

    const token = localStorage.getItem('token');

    if (!token) {
      return notAuthentic();
    }

    const usuarioCriado = await spotifyService.initializeUser();
    if (usuarioCriado) res(true);
    else res(notAuthentic());
    return false;
  });
