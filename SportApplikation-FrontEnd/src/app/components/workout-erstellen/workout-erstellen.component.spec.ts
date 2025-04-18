import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutErstellenComponent } from './workout-erstellen.component';

describe('WorkoutErstellenComponent', () => {
  let component: WorkoutErstellenComponent;
  let fixture: ComponentFixture<WorkoutErstellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutErstellenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
