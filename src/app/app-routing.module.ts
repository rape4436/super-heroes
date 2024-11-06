import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeFormComponent } from './heroes/heroe-form/heroe-form.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroeListComponent },
  { path: 'heroes/new', component: HeroeFormComponent },
  { path: 'heroes/edit/:id', component: HeroeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }