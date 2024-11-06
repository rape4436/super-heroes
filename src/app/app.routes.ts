import { Routes } from '@angular/router';
import { HeroeFormComponent } from './heroes/heroe-form/heroe-form.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroeListComponent },
    { path: 'heroes/new', component: HeroeFormComponent },
    { path: 'heroes/edit/:id', component: HeroeFormComponent },
];
