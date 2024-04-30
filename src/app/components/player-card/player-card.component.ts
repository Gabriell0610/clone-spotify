import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factory';
import { IMusic } from 'src/app/interface/IMusic';
import { PlayerService } from 'src/app/services/player.service';
=======
>>>>>>> c9821c380ea06793e6ec7b2ff1b43f0e2b536a88

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
<<<<<<< HEAD
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit {
  currentMusic: IMusic = newMusic();
  subs: Subscription[] = [];

  constructor(private playerService: PlayerService) {}

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
=======
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {



  ngOnInit(): void {
    
  }

>>>>>>> c9821c380ea06793e6ec7b2ff1b43f0e2b536a88
}
