import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPainelComponent } from 'src/app/components/left-painel/left-painel.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FooterUserComponent } from 'src/app/components/footer-user/footer-user.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistsComponent } from 'src/app/components/top-artists/top-artists.component';

@NgModule({
  declarations: [
    PlayerComponent,
    LeftPainelComponent,
    ButtonMenuComponent,
    FooterUserComponent,
    HomeComponent,
    TopArtistsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(PlayerRoutes)],
})
export class PlayerModule {}
