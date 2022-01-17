import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadlinesPageComponent } from './top-headlines-page.component';

describe('TopHeadlinesPageComponent', () => {
  let component: TopHeadlinesPageComponent;
  let fixture: ComponentFixture<TopHeadlinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeadlinesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadlinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
