import { Component, OnInit } from '@angular/core';
import { IArtists } from 'src/app/interface/IArtistas';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss'],
})
export class TopArtistsComponent implements OnInit {
  topArtists: IArtists[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getTopFiveArtists();
  }

  async getTopFiveArtists() {
    this.topArtists = await this.spotifyService.getArtistsUser(5);
    console.log(this.topArtists);
  }
}
