import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  pokeList: Pokemon[] = [];
  page = 1;
  limit = 8;
  totalItems: number = 0;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
    this.totalItems = this.pokeList.length;
  }

  getAllPokemons() {
    this.service.getPokemon().subscribe((data: any) => {
      this.pokeList = data.results;
    });
  }
}
