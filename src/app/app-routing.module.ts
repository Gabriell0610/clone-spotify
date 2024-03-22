import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((l) => l.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((p) => p.PlayerModule),
    resolve: {
      usuarioLogado: authGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
