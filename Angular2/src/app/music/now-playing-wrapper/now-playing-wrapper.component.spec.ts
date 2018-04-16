import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingWrapperComponent } from './now-playing-wrapper.component';

describe('NowPlayingWrapperComponent', () => {
  let component: NowPlayingWrapperComponent;
  let fixture: ComponentFixture<NowPlayingWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlayingWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
