import { Injectable } from '@angular/core';
import { IMusic } from '../interface/IMusic';
import { newMusic } from '../common/factory';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // Variável que é uma instância de BehaviorSubject que é inicializada com o factory newMusic()
  currentMusic = new BehaviorSubject<IMusic>(newMusic());

  constructor(private spotifyService: SpotifyService) {
    this.getCurrentMusic();
  }

  async getCurrentMusic() {
    const music = await this.spotifyService.getCurrentMusic();
    this.definedCurrentMusic(music);
  }

  definedCurrentMusic(music: IMusic) {
    // o método next serve para publicar esse valor para todos os componentes que estão escutando a variável currentMusic
    this.currentMusic.next(music);
  }
}
