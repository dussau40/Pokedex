import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ListOfPokemonsComponent } from './list-of-pokemons/list-of-pokemons.component';
import { ShadowCardDirective } from './Directive/shadow-card.directive';
import { PokemonTypeColorPipe } from './Pipe/pokemon-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ListOfPokemonsComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
