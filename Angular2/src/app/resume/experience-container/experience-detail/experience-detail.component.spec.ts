import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsComponent } from './experience-detail.component';

describe('ExperienceDetailsComponent', () => {
  let component: ExperienceDetailsComponent;
  let fixture: ComponentFixture<ExperienceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
