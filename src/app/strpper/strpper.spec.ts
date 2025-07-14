import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strpper } from './strpper';

describe('Strpper', () => {
  let component: Strpper;
  let fixture: ComponentFixture<Strpper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strpper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Strpper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
