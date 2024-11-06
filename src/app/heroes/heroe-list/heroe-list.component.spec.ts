import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroeListComponent } from './heroe-list.component';
import { HeroeService } from '../../core/services/heroe.service';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroeListComponent', () => {
  let component: HeroeListComponent;
  let fixture: ComponentFixture<HeroeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, BrowserAnimationsModule],
      providers: [
        {
          provide: HeroeService
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
