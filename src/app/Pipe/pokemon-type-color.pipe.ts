import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = 'red';
        break;
      case 'Eau':
        color = 'blue';
        break;
      case 'Plante':
        color = 'green';
        break;
      case 'Insecte':
        color = 'brown';
        break;
      case 'Normal':
        color = 'grey';
        break;
      case 'Vol':
        color = 'blue';
        break;
      case 'Poison':
        color = 'deep-purple';
        break;
      case 'Fée':
        color = 'pink';
        break;
      case 'Psy':
        color = 'deep-purple';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }
}