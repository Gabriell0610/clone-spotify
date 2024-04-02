import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from '../home/home.component';
import { Component } from '@angular/core';

export const PlayerRoutes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'pesquisar',
        component: HomeComponent,
      },
      {
        path: 'artistas',
        component: HomeComponent,
      },
    ],
  },
];
