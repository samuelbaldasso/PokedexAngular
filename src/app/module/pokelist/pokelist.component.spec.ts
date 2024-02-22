import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistComponent } from './pokelist.component';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { PokemonDetails } from 'src/app/shared/models/pokemon.model';
import { environment } from 'src/environments/environment';
import { Observable, from, of } from 'rxjs';

describe('PokelistComponent', () => {
  let component: PokelistComponent;
  let fixture: ComponentFixture<PokelistComponent>;
  let pokemonService: PokemonService;
  let httpController: HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    const expected: PokemonDetails =
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
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PokelistComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: from([{ id: 1 }]),
        }
      }, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokelistComponent);
    component = fixture.componentInstance;
    component.pokemons = expected;
    pokemonService = TestBed.inject(PokemonService);
    httpController = TestBed.inject(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj(HttpClient, ['get']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should update on ngOnInit', () => {
    spyOn(pokemonService, 'getPokemonDetails').and.returnValue(of({
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
      }],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    } as PokemonDetails));

    component.ngOnInit();
    fixture.detectChanges();
    expect(pokemonService.getPokemonDetails).toHaveBeenCalledTimes(1);
  });
});
