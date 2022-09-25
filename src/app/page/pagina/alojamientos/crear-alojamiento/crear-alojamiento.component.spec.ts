import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlojamientoComponent } from './crear-alojamiento.component';

describe('CrearAlojamientoComponent', () => {
  let component: CrearAlojamientoComponent;
  let fixture: ComponentFixture<CrearAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlojamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
