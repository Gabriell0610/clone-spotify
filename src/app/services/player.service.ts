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
  timeId: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.getCurrentMusic();
  }

  async getCurrentMusic() {
    clearTimeout(this.timeId);

    //Obtendo a música
    const music = await this.spotifyService.getDataCurrentMusic();
    this.definedCurrentMusic(music);
   

    //causando o loop para pegar a todo momento os dados da música que está tocando
    this.timeId = setInterval(async () => {
      await this.getCurrentMusic();
    }, 3000);
  }

  definedCurrentMusic(music: IMusic) {
    // o método next serve para publicar esse valor para todos os componentes que estão escutando a variável currentMusic
    this.currentMusic.next(music);
  }

  backMusic() {
    this.spotifyService.backMusic()
  }

  nextMusic() {
    this.spotifyService.nextMusic()
  }

}
