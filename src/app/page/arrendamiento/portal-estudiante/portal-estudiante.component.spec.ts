import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalEstudianteComponent } from './portal-estudiante.component';

describe('PortalEstudianteComponent', () => {
  let component: PortalEstudianteComponent;
  let fixture: ComponentFixture<PortalEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
