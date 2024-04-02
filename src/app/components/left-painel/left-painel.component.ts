import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPlaylists();

    // Obtém o segmento da rota ativa
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    if (currentRoute) {
      //Se essa rota atual for true a variável btnSelected recebe a rota atual que pode ser home - pesquisar - artista
      this.btnSelected = currentRoute; // Define o botão selecionado com base na rota ativa
    }
  }

  buttonClick(name: string) {
    this.btnSelected = name;
    this.router.navigateByUrl(`player/${this.btnSelected}`);
  }

  async getPlaylists() {
    this.playlistUser = await this.spotifyService.getUserPlaylist();
    console.log(this.playlistUser);
  }
}
