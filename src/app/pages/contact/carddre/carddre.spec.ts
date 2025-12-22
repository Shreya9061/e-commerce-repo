import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carddre } from './carddre';

describe('Carddre', () => {
  let component: Carddre;
  let fixture: ComponentFixture<Carddre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carddre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carddre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
