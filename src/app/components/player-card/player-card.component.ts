import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factory';
import { IMusic } from 'src/app/interface/IMusic';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit {
  currentMusic: IMusic = newMusic();
  subs: Subscription[] = [];

  constructor(
    private playerService: PlayerService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.getCurrentMusic();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  async getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe((music) => {
      this.currentMusic = music;
      console.log(this.currentMusic);

    });

    this.subs.push(sub);
  }

  backMusic() {
      this.playerService.backMusic()
  }

  nextMusic() {
    this.playerService.nextMusic()
  }

  async playMusic(music: IMusic) {
    await this.spotifyService.startMusic(music.id);
    this.playerService.definedCurrentMusic(music);
  }
}
