import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeroeFormComponent } from './heroes/heroe-form/heroe-form.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroeFormComponent,
    HeroeListComponent,
  ],
  providers: [],
})
export class AppModule {}