import { Component, OnInit } from '@angular/core';
import { IPlaylist } from 'src/app/interface/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-left-painel',
  templateUrl: './left-painel.component.html',
  styleUrls: ['./left-painel.component.scss'],
})
export class LeftPainelComponent implements OnInit {
  btnSelected: string = '';
  playlistUser: IPlaylist[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  buttonClick(name: string) {
    this.btnSelected = name;
  }

  async getPlaylists() {
    this.playlistUser = await this.spotifyService.getUserPlaylist();
    console.log(this.playlistUser);
  }
}
