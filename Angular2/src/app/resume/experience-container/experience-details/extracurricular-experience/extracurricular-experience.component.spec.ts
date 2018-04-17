import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularExperienceComponent } from './extracurricular-experience.component';

describe('ExtracurricularExperienceComponent', () => {
  let component: ExtracurricularExperienceComponent;
  let fixture: ComponentFixture<ExtracurricularExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurricularExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurricularExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
