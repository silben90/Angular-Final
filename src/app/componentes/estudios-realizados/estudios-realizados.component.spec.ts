import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosRealizadosComponent } from './estudios-realizados.component';

describe('EstudiosRealizadosComponent', () => {
  let component: EstudiosRealizadosComponent;
  let fixture: ComponentFixture<EstudiosRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosRealizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
