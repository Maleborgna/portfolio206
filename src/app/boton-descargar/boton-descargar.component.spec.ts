import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDescargarComponent } from './boton-descargar.component';

describe('BotonDescargarComponent', () => {
  let component: BotonDescargarComponent;
  let fixture: ComponentFixture<BotonDescargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonDescargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDescargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
