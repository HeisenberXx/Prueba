import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVueloDeparturesComponent } from './crear-vuelo-departures.component';

describe('CrearVueloDeparturesComponent', () => {
  let component: CrearVueloDeparturesComponent;
  let fixture: ComponentFixture<CrearVueloDeparturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVueloDeparturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearVueloDeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
