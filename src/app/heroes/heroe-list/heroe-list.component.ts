import { CommonModule } from '@angular/common';
import { Component, effect, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Heroe } from '../../core/model/heroe.interface';
import { HeroeService } from '../../core/services/heroe.service';

@Component({
  selector: 'app-heroe-list',
  standalone: true,
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
  ],
})
export class HeroeListComponent {
  heroes: Heroe[] = [];
  selectedHeroe: Heroe | null = null;
  searchQuery = '';

  displayedColumns: string[] = ['id', 'name', 'power', 'alias', 'actions'];
  listDataSource = new MatTableDataSource<Heroe>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchText: string = '';
  timeout: any;

  constructor(private heroeService: HeroeService, private router: Router) {
    effect(() => {
      this.heroes = this.heroeService.heroesList();
      this.listDataSource.data = this.heroeService.heroesList();
    });
  }

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes(): void {
    this.listDataSource = new MatTableDataSource<Heroe>(this.heroes);
    this.listDataSource.paginator = this.paginator;
    this.listDataSource.sort = this.sort;
  }

  onAddHeroe(): void {
    this.router.navigate(['/heroes/new']);
  }

  onEditHeroe(heroe: Heroe): void {
    this.router.navigate([`/heroes/edit/${heroe.id}`]);
  }

  onDeleteHeroe(heroe: Heroe): void {
    if (
      confirm(`¿Estás seguro de que quieres eliminar al héroe ${heroe.name}?`)
    ) {
      this.heroeService.deleteHeroe(heroe.id);
      this.listDataSource.data = this.heroeService.heroesList();
    }
  }

  onSaveHeroe(heroe: Heroe): void {
    if (heroe.id) {
      this.heroeService.updateHeroe(heroe);
    } else {
      heroe.id = Date.now();
      this.heroeService.addHeroe(heroe);
    }
    this.listDataSource.data = this.heroeService.heroesList();
  }

  onInputChange() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.filterData();
    }, 300);
  }

  filterData() {
    const search = this.searchQuery.trim().toLowerCase();
    const dataFiltered = this.heroes.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    this.feedDataSource(dataFiltered);
  }

  feedDataSource(data: Heroe[]) {
    this.listDataSource.data = data;
    this.listDataSource.paginator = this.paginator;
    this.listDataSource.sort = this.sort;
  }
}
