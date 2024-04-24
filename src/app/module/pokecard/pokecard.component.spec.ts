import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokecardComponent } from './pokecard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Pokemon, PokemonDetails } from 'src/app/shared/models/pokemon.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

describe('PokecardComponent', () => {
  let component: PokecardComponent;
  let fixture: ComponentFixture<PokecardComponent>;
  let pokemonService: PokemonService;
  let searchPipe: SearchPipe;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokecardComponent, SearchPipe],
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [SearchPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokecardComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    searchPipe = TestBed.inject(SearchPipe);
    httpController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });


  it('should get pokemons from API', () => {
    const mockPokemons: Pokemon[] = [
      {
        name: 'Charizard',
        url: 'string',
      },
      {
        name: 'Pikachu',
        url: 'string',
      },
    ] as Pokemon[];

    const mockRequest = httpController.expectOne(`${environment.API_URL}/pokemon?offset=0&limit=1303`);

    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockPokemons);

  });

  it('should filter pokemons by search text', () => {
    const mockFilteredData: Pokemon[] = [
      {
        name: 'Charizard',
        url: 'string',
      },
      {
        name: 'Pikachu',
        url: 'string',
      },
    ];

    const mockSearchText = 'char';

    component.filteredData = mockFilteredData;

    const searchedData = searchPipe.transform(mockFilteredData, mockSearchText);

    component.filterData();

    expect(searchedData).toEqual([mockFilteredData[0]]);
  });
});
