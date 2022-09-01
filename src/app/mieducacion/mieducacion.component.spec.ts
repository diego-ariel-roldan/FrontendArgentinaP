import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MieducacionComponent } from './mieducacion.component';

describe('MieducacionComponent', () => {
  let component: MieducacionComponent;
  let fixture: ComponentFixture<MieducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MieducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MieducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
