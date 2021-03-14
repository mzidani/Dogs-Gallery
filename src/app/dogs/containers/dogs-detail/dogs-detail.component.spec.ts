import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsDetailComponent } from './dogs-detail.component';

describe('DogsDetailComponent', () => {
  let component: DogsDetailComponent;
  let fixture: ComponentFixture<DogsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
