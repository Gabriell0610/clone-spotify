import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-search',
  templateUrl: './current-search.component.html',
  styleUrls: ['./current-search.component.scss'],
})
export class CurrentSearchComponent implements OnInit {
  currentSearch = [
    'Five Fingers Death Punch',
    'Top Brasil',
    'Top Global',
    'Esquenta Sertanejo',
    'Shaw Mendes',
  ];

  valueInput: String = '';

  ngOnInit(): void {}

  definiedSearch(value: string) {
    this.valueInput = value;
  }

  search() {
    console.log('Buscando...', this.valueInput);
    this.valueInput = '';
  }
}
