import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../../Model/mock-pokemons';
import { Pokemon } from '../../Model/Pokemon';

@Component({
  selector: 'app-list-of-pokemons',
  templateUrl: './list-of-pokemons.component.html',
  styleUrls: ['./list-of-pokemons.component.scss']
})
export class ListOfPokemonsComponent implements OnInit {

  constructor() { }

  title = 'Pokedex';
  pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
}

