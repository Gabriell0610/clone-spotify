import { Component, OnInit } from '@angular/core';
import { IMusic } from 'src/app/interface/IMusic';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  musics: IMusic[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getMusics();
  }

  async getMusics() {
    this.musics = await this.spotifyService.searchMusic(0, 50);
    console.log(this.musics);
  }

  getArtist(musica: IMusic) {
    return musica.artists.map((artist) => artist.name).join(', ');
  }

  async playMusic(music: IMusic) {
    await this.spotifyService.startMusic(music.id);
  }
}
