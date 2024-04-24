import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Pokemon, PokemonDetails } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';

describe('PokemonService', () => {
  let httpController: HttpTestingController;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    pokemonService = TestBed.inject(PokemonService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(pokemonService).toBeDefined();
  });

  it('should return all pokemons (HttpClient called once)', () => {
    const expected: Pokemon[] = [
      {
        name: 'Charizard',
        url: 'string'
      },
      {
        name: 'Pikachu',
        url: 'string'
      }
    ];

    pokemonService.getPokemon().subscribe((data: any) => {
      expect(data).toBeDefined();
    });

    const mockReq = httpController.expectOne(`${environment.API_URL}/pokemon?offset=0&limit=1303`);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(expected));
  });

  it('should return pokemon details by id (HttpClient called once)', () => {
    const expected: PokemonDetails[] = [
      {
        name: 'Charizard',
        url: 'string',
        height: 180,
        weight: 18,
        abilities: [{
          ability: {
            name: "string",
            url: "string"
          },
        }],
        types: [{
          type: {
            name: "string",
            url: "string"
          }
        }]
      }
    ];

  const mockId = 2;

  pokemonService.getPokemonDetails(mockId).subscribe((data: any) => {
    expect(data).toBeDefined();
  });

  const mockReq = httpController.expectOne(`${environment.API_URL}/pokemon/${mockId}`);
  expect(mockReq.request.method).toBe('GET');
  mockReq.flush(Object.values(expected));
});

it('should return pokemons image by id (HttpClient called once)', () => {
  const expectedImage = {
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  };

  const mockId = 2;
  pokemonService.getImageOfPokemon(mockId);
  expect(pokemonService.getImageOfPokemon(mockId)).toEqual(expectedImage.imageUrl);
});
});
