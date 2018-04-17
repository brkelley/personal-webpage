import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceNavbarComponent } from './experience-navbar.component';

describe('ExperienceNavbarComponent', () => {
  let component: ExperienceNavbarComponent;
  let fixture: ComponentFixture<ExperienceNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
