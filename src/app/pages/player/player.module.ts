import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPainelComponent } from 'src/app/components/left-painel/left-painel.component';

@NgModule({
  declarations: [PlayerComponent, LeftPainelComponent],
  imports: [CommonModule, RouterModule.forChild(PlayerRoutes)],
})
export class PlayerModule {}
