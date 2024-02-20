import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonDetails, ResponsePokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {
  id: any;
  pokemons: PokemonDetails = {} as PokemonDetails;
  constructor(private route: ActivatedRoute, private service: PokemonService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: any) => {
        this.id = params['id'];
        this.service.getPokemonDetails(this.id).subscribe((data: PokemonDetails) => {
          this.pokemons = data;
          this.pokemons.imageUrl = this.service.getImageOfPokemon(this.id);
        });
      });
  }

}
