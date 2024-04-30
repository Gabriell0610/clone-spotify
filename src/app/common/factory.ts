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
    id: 'spotify:track:11Ojp7JniVvwd0gmgvyKkd',
    title: 'Wrong Side of Heaven',
    artists: [],
    album: {
      id: '',
      name: '',
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b27376df46a3fd82c419a2dc0a43',
    },
    time: '',
  };
}
