import { IArtist } from '../interface/IArtistas';
import { IMusic } from '../interface/IMusic';

export function newArtist(): IArtist {
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
