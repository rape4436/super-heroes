import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroeService } from '../../core/services/heroe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpperCaseDirective } from '../../shared/directives/uppercase.directive';
import { HeroeFormComponent } from './heroe-form.component';
import { ActivatedRoute } from '@angular/router';


class MockActivatedRoute {
  snapshot = {
    paramMap: {
      get: () => '123',
    },
  };
}

describe('HeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, UpperCaseDirective],
      providers: [
        HeroeService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
