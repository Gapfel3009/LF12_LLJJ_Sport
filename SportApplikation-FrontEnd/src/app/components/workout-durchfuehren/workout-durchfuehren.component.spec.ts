import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDurchfuehrenComponent } from './workout-durchfuehren.component';

describe('WorkoutDurchfuehrenComponent', () => {
  let component: WorkoutDurchfuehrenComponent;
  let fixture: ComponentFixture<WorkoutDurchfuehrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutDurchfuehrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutDurchfuehrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
