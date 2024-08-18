import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosInfoComponent } from './gastos-info.component';

describe('GastosInfoComponent', () => {
  let component: GastosInfoComponent;
  let fixture: ComponentFixture<GastosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastosInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
