import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsCommentComponent } from './dogs-comment.component';

describe('DogsCommentComponent', () => {
  let component: DogsCommentComponent;
  let fixture: ComponentFixture<DogsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
