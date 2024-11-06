import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroeFormComponent } from './heroes/heroe-form/heroe-form.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroeListComponent, HeroeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'super-heroes';
}
