import { IArtists } from '../interface/IArtistas';
import { IMusic } from '../interface/IMusic';

export function newArtist(): IArtists {
  return {
    id: '',
    name: '',
    imageUrl: '',
  };
}

export function newMusic(): IMusic {
  return {
    id: '',
    title: '',
    artists: [],
    album: {
      id: '',
      name: '',
      imageUrl: '',
    },
    time: '',
  };
}
