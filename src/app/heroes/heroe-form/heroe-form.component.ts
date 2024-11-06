import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../core/model/heroe.interface';
import { HeroeService } from '../../core/services/heroe.service';
import { UpperCaseDirective } from '../../shared/directives/uppercase.directive';

@Component({
  selector: 'app-heroe-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UpperCaseDirective],
  styleUrls: ['./heroe-form.component.scss'],
  templateUrl: './heroe-form.component.html',
})
export class HeroeFormComponent implements OnInit {
  @Input() heroe: Heroe | null = null;
  @Output() save = new EventEmitter<Heroe>();
  heroeForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private heroeService: HeroeService,
    private router: Router,
    private route: ActivatedRoute // Inyectamos ActivatedRoute
  ) {
    this.heroeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      power: ['', Validators.required],
      alias: [''],
    });
  }

  ngOnInit(): void {
    const heroeId = this.route.snapshot.paramMap.get('id');
    if (heroeId) {
      const heroe = this.heroeService.getHeroeById(+heroeId);
      if (heroe) {
        this.heroe = heroe;
        this.heroeForm.patchValue(this.heroe);
      }
    }
  }

  onSubmit(): void {
    if (this.heroeForm.valid) {
      const heroeData: Heroe = {
        ...this.heroe,
        ...this.heroeForm.value,
      };
      if (this.heroe) {
        this.heroeService.updateHeroe(heroeData);
      } else {
        heroeData.id = Date.now();
        this.heroeService.addHeroe(heroeData);
      }
      this.router.navigate(['/heroes']);
    }
  }
}
