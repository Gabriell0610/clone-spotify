import { IUsuario } from '../interface/IUsuario';

export function getDataUser(
  data: SpotifyApi.CurrentUsersProfileResponse
): IUsuario {
  return {
    id: data.id,
    name: data.display_name,
    imageUrl: data.images.pop().url,
  };
}
