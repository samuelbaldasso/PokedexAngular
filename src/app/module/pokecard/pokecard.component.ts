import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})

export class PokecardComponent implements OnInit {
  page = 1;
  limit = 8;
  pokeList: Pokemon[] = [];
  totalItems: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data: any) => {
      this.pokeList = data;
      this.updateTotalItems();
    });
  }

  updateTotalItems(): void {
    this.totalItems = this.pokeList.length;
  }
}
