import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss'],
  providers: [SearchPipe]
})

export class PokecardComponent implements OnInit {
  page = 1;
  limit = 8;
  totalItems: number = 0;
  @Input() searchText = '';
  hasResults = false;
  filteredData: Pokemon[] = [];
  filterArray: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private searchService: SearchPipe) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data: any) => {
      this.filteredData = data.results;
      this.filterArray = this.filteredData;
      this.updateTotalItems();
    });

    this.filterArray = [];
  }

  updateTotalItems(): void {
    this.totalItems = this.filterArray?.length || 0;
  }

  filterData(): void {
    this.filterArray = this.searchService.transform(this.filteredData, this.searchText);
  }
}
