import { Injectable } from '@angular/core';
import { IMusic } from '../interface/IMusic';
import { newMusic } from '../common/factory';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // Variável que é uma instância de BehaviorSubject que é inicializada com o factory newMusic()
  currentMusic = new BehaviorSubject<IMusic>(newMusic());

  constructor() {}
}
