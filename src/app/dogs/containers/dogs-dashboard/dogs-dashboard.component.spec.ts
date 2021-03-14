import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsDashboardComponent } from './dogs-dashboard.component';

describe('DogsDashboardComponent', () => {
  let component: DogsDashboardComponent;
  let fixture: ComponentFixture<DogsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
