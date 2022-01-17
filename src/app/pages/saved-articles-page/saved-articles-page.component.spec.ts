import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedArticlesPageComponent } from './saved-articles-page.component';

describe('SavedArticlesPageComponent', () => {
  let component: SavedArticlesPageComponent;
  let fixture: ComponentFixture<SavedArticlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedArticlesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
