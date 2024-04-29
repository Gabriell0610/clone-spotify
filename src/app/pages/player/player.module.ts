import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPainelComponent } from 'src/app/components/left-painel/left-painel.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FooterUserComponent } from 'src/app/components/footer-user/footer-user.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistComponent } from 'src/app/components/top-artist/top-artist.component';
import { RigthPainelComponent } from 'src/app/components/rigth-painel/rigth-painel.component';
import { CurrentSearchComponent } from 'src/app/components/current-search/current-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopArtistsComponent } from 'src/app/components/top-artists/top-artists.component';
import { ArtistsImageItemComponent } from 'src/app/components/artists-image-item/artists-image-item.component';
@NgModule({
  declarations: [
    PlayerComponent,
    LeftPainelComponent,
    ButtonMenuComponent,
    FooterUserComponent,
    HomeComponent,
    TopArtistComponent,
    RigthPainelComponent,
    CurrentSearchComponent,
    TopArtistsComponent,
    ArtistsImageItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PlayerModule {}
