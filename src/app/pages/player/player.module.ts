import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPainelComponent } from 'src/app/components/left-painel/left-painel.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';

@NgModule({
  declarations: [PlayerComponent, LeftPainelComponent, ButtonMenuComponent],
  imports: [CommonModule, RouterModule.forChild(PlayerRoutes)],
})
export class PlayerModule {}
