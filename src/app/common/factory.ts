import { IArtists } from '../interface/IArtistas';

export function newArtist(): IArtists {
  return {
    id: '',
    name: '',
    imageUrl: '',
  };
}
