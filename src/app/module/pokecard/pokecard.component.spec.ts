import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardComponent } from './pokecard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Pokemon, PokemonDetails } from 'src/app/shared/models/pokemon.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

describe('PokecardComponent', () => {
  let component: PokecardComponent;
  let fixture: ComponentFixture<PokecardComponent>;
  let pokemonService: PokemonService;
  let httpController: HttpTestingController;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokecardComponent],
      imports: [HttpClientTestingModule, NgxPaginationModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokecardComponent);
    component = fixture.componentInstance;
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    pokemonService = TestBed.inject(PokemonService);
    httpController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should update pokemons', () => {
    spyOn(pokemonService, 'getPokemon').and.returnValue(of([
      {
        name: 'Charizard',
        url: 'string',
      }
    ] as Pokemon[]));

    component.ngOnInit();
    fixture.detectChanges();
    expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
  });
});
