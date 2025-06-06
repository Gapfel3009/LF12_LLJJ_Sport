import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsiteComponent } from './mainsite.component';

describe('MainsiteComponent', () => {
  let component: MainsiteComponent;
  let fixture: ComponentFixture<MainsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
