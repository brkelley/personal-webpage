import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicQuoteComponent } from './music-quote.component';

describe('MusicQuoteComponent', () => {
  let component: MusicQuoteComponent;
  let fixture: ComponentFixture<MusicQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
