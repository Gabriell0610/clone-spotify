import { IPlaylist } from '../interface/IPlaylist';
import { IUsuario } from '../interface/IUsuario';

//Função que preenche a interface de usuário com as informações que vem do servi
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
