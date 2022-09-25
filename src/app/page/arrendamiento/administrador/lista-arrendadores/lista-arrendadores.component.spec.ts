import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArrendadoresComponent } from './lista-arrendadores.component';

describe('ListaArrendadoresComponent', () => {
  let component: ListaArrendadoresComponent;
  let fixture: ComponentFixture<ListaArrendadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArrendadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArrendadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
