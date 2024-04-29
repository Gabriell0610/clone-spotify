import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { IUsuario } from 'src/app/interface/IUsuario';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer-user.component.html',
  styleUrls: ['./footer-user.component.scss'],
})
export class FooterUserComponent implements OnInit {
  usuario: IUsuario = null;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.usuario = this.spotifyService.usuario;
  }

  logout() {
    this.spotifyService.logout();
  }
}
