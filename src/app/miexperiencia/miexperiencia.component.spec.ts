import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiexperienciaComponent } from './miexperiencia.component';

describe('MiexperienciaComponent', () => {
  let component: MiexperienciaComponent;
  let fixture: ComponentFixture<MiexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiexperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
