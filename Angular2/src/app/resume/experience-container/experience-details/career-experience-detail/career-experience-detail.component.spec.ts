import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerExperienceDetailComponent } from './career-experience-detail.component';

describe('CareerExperienceDetailComponent', () => {
  let component: CareerExperienceDetailComponent;
  let fixture: ComponentFixture<CareerExperienceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerExperienceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
