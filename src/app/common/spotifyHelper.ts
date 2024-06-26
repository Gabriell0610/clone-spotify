import { addMilliseconds, format } from 'date-fns';
import { IArtist } from '../interface/IArtistas';
import { IMusic } from '../interface/IMusic';
import { IPlaylist } from '../interface/IPlaylist';
import { IUsuario } from '../interface/IUsuario';
import { newMusic } from './factory';

//Função que preenche a interface de usuário com as informações que vem do service
export function getDataUser(
  data: SpotifyApi.CurrentUsersProfileResponse
): IUsuario {
  //Verficando se o usuário possui imagem
  let imageUrl: string | undefined;
  if (data.images && data.images.length > 0) {
    imageUrl = data.images.pop()?.url;
  } else if (data.images.length === 0) {
    imageUrl = data.display_name[0].toUpperCase();
  }

  return {
    id: data.id,
    name: data.display_name,
    imageUrl: imageUrl,
  };
}

export function getDataPlaylist(
  dataPlaylist: SpotifyApi.PlaylistObjectSimplified
): IPlaylist {
  //Verficando se a playlist possui imagem
  let imageUrl: string | undefined;

  if (dataPlaylist.images && dataPlaylist.images.length > 0) {
    imageUrl = dataPlaylist.images.pop()?.url;
  }

  let anyName: string;
  if (dataPlaylist.name !== '') {
    anyName = dataPlaylist.name;
  } else {
    anyName = '**';
  }

  return {
    id: dataPlaylist.id,
    name: anyName,
    imageUrl: imageUrl,
  };
}

export function getTopArtist(data: SpotifyApi.ArtistObjectFull): IArtist {
  return {
    id: data.id,
    name: data.name,
    imageUrl: data.images.sort((a, b) => a.width - b.width).pop().url, //pegando a imagem com a maior largura
  };
}

export function spotifyGetSearchMusic(
  data: SpotifyApi.TrackObjectFull
): IMusic {
  if (!data) return newMusic();
  //Trasnformando o milisegundo em minuto e segundo
  const msForMinute = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  };


  return {
    id: data.uri, // id que contém a track da música
    title: data.name,
    album: {
      id: data.album.id,
      name: data.album.name,
      imageUrl: data.album.images.shift().url,
    },
    artists: data.artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
    })),
    time: msForMinute(data.duration_ms),
  };
}
