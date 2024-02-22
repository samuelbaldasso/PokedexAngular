import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonDetails } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private httpClient: HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${environment.API_URL}/pokemon?offset=0&limit=1303`);
  }

  getPokemonDetails(pokemonId: number): Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(`${environment.API_URL}/pokemon/${pokemonId}`);
  }

  getImageOfPokemon(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
  }
}
