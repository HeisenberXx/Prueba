import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosUsuarioComponent } from './vuelos-usuario.component';

describe('VuelosUsuarioComponent', () => {
  let component: VuelosUsuarioComponent;
  let fixture: ComponentFixture<VuelosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
