import { Component, OnInit } from '@angular/core';
import { newArtist } from 'src/app/common/factory';
import { IArtists } from 'src/app/interface/IArtistas';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss'],
})
export class TopArtistsComponent implements OnInit {
  artists: IArtists = newArtist(); //Inicializando o artista como string vazia e não como null

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.searchTopOneArtist();
  }

  async searchTopOneArtist() {
    const topArtist = await this.spotifyService.getArtistsUser();
    console.log(topArtist);

    if (!!topArtist) {
      this.artists = topArtist[0];
      console.log(this.artists);
    }
  }
}
