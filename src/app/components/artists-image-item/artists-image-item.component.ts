import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists-image-item',
  templateUrl: './artists-image-item.component.html',
  styleUrls: ['./artists-image-item.component.scss'],
})
export class ArtistsImageItemComponent implements OnInit {
  @Input() imageUrl = '';

  @Output() click = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
