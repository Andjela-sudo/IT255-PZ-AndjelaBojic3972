import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidBarComponent } from './covid-bar.component';

describe('CovidBarComponent', () => {
  let component: CovidBarComponent;
  let fixture: ComponentFixture<CovidBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
