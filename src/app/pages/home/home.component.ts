import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factory';
import { IMusic } from 'src/app/interface/IMusic';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  musics: IMusic[] = [];

  //Variável que irá armazenar a música atual que está tocando
  currentMusic: IMusic = newMusic();

  //Array responsável por se desinscrever da inscrição atual, evitando assim um acumulo de requisições
  subs: Subscription[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getMusics();
    this.getCurrentMusic();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  //Método que pega a música
  async getMusics() {
    this.musics = await this.spotifyService.searchMusic();
    console.log(this.musics);
  }

  //Método que pega o nome do artista e separa por vírgula e espaço
  getArtist(musica: IMusic) {
    return musica.artists.map((artist) => artist.name).join(', ');
  }

  //Método que starta a música pelo id
  async playMusic(music: IMusic) {
    await this.spotifyService.startMusic(music.id);
    this.playerService.definedCurrentMusic(music);
  }

  //Método que se inscreve no behaviorSubject e pega o valor da musica atual e armazena na variável currentMusic
  getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe((music) => {
      this.currentMusic = music;
      console.log('musica atual:', this.currentMusic);
    });
    console.log(this.currentMusic);

    this.subs.push(sub);
  }
}
