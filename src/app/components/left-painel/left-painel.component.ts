import { Component } from '@angular/core';

@Component({
  selector: 'app-left-painel',
  templateUrl: './left-painel.component.html',
  styleUrls: ['./left-painel.component.scss'],
})
export class LeftPainelComponent {
  btnSelected: string = '';

  constructor() {}

  buttonClick(name: string) {
    this.btnSelected = name;
  }
}
