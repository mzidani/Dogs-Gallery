import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsSearchComponent } from './dogs-search.component';

describe('DogsSearchComponent', () => {
  let component: DogsSearchComponent;
  let fixture: ComponentFixture<DogsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
