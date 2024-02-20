import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonDetails, ResponsePokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  pokeList: PokemonDetails[] = [];
  page = 1;
  limit = 8;
  pokeRes: ResponsePokemon[] = [];
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.service.getPokemon().subscribe((data: any) => {
      this.pokeList = data.results;
    });
  }
}
