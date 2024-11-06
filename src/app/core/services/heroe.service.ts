import { Injectable, signal } from '@angular/core';
import { Heroe } from '../model/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private readonly heroes = signal<Heroe[]>([]); 

  get heroesList() {
    return this.heroes;
  }

  addHeroe(heroe: Heroe): void {
    this.heroes.update((heroes) => [...heroes, heroe]);
  }

  getHeroeById(id: number): Heroe | undefined {
    return this.heroes().find((heroe) => heroe.id === id);
  }

  searchHeroes(name: string): Heroe[] {
    return this.heroes().filter((heroe) =>
      heroe.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  updateHeroe(updatedHeroe: Heroe): void {
    this.heroes.update((heroes) =>
      heroes.map((heroe) => (heroe.id === updatedHeroe.id ? updatedHeroe : heroe))
    );
  }

  deleteHeroe(id: number): void {
     this.heroes.update((heroes) => heroes.filter((heroe) => heroe.id !== id));
  }
}
