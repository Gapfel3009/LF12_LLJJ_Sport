import { ComponentFixture, TestBed } from '@angular/core/testing';

import {FlappyBirdComponent} from './flappybird.component';

describe('FlappybirdComponent', () => {
  let component: FlappyBirdComponent;
  let fixture: ComponentFixture<FlappyBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlappyBirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlappyBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
