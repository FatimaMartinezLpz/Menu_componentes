import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputEmai } from './mat-input-emai';

describe('MatInputEmai', () => {
  let component: MatInputEmai;
  let fixture: ComponentFixture<MatInputEmai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputEmai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatInputEmai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
