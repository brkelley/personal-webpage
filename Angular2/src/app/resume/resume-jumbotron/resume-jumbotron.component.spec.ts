import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeJumbotronComponent } from './resume-jumbotron.component';

describe('ResumeJumbotronComponent', () => {
  let component: ResumeJumbotronComponent;
  let fixture: ComponentFixture<ResumeJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
