import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVuelosComponent } from './ver-vuelos.component';

describe('VerVuelosComponent', () => {
  let component: VerVuelosComponent;
  let fixture: ComponentFixture<VerVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerVuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
