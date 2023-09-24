import { CharacterType, CharacterDetailType } from '../types/types'

const API_END_POINT = 'https://disney_api.nomadcoders.workers.dev'

export function fetchCharacters(): Promise<CharacterType[]> {
  return fetch(`${API_END_POINT}/characters`).then(response => response.json())
}

export function fetchCharacterDetail(id: number): Promise<CharacterDetailType> {
  return fetch(`${API_END_POINT}/characters/${id}`).then(response => response.json())
}
