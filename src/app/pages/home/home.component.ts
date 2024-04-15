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

  //Variável que irá armazenas a música atual que está tocando
  currentMusic: IMusic = newMusic();

  //Array resposável por se desinscrever da inscrição atual, evitando assim um acumulo de requisições
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

  async getMusics() {
    this.musics = await this.spotifyService.searchMusic();
    console.log(this.musics);
  }

  //Método que se inscreve no behaviorSubject e pega o valor da musica atual e armazena na variável currentMusic
  getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe((music) => {
      this.currentMusic = music;
    });

    this.subs.push(sub);
  }

  getArtist(musica: IMusic) {
    return musica.artists.map((artist) => artist.name).join(', ');
  }

  async playMusic(music: IMusic) {
    await this.spotifyService.startMusic(music.id);
  }
}
