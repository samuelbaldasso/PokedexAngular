import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './module/pokelist/pokelist.component';
import { AboutComponent } from './module/about/about.component';
import { PokecardComponent } from './module/pokecard/pokecard.component';

const routes: Routes = [
  { path: '', component: PokecardComponent, pathMatch: 'full' },
  { path: 'pokelist/:id', component: PokelistComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
