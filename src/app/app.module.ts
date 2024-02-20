import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/header/header.component';
import { HomeComponent } from './module/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokecardComponent } from './module/pokecard/pokecard.component';
import { PokelistComponent } from './module/pokelist/pokelist.component';
import { AboutComponent } from './module/about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokecardComponent,
    PokelistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
