import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Model/Pokemon';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { PokemonTypeColorPipe } from '../Pipe/pokemon-type-color.pipe';

@Component({
  selector: 'app-list-of-pokemons',
  templateUrl: './list-of-pokemons.component.html',
  styleUrls: ['./list-of-pokemons.component.scss']
})
export class ListOfPokemonsComponent {
  pokemons: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/Pokemons').valueChanges()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
   }

  title = 'Pokedex';

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
}

