import { TestBed, inject } from '@angular/core/testing';

import { BandBotService } from './band-bot.service';

describe('BandBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandBotService]
    });
  });

  it('should ...', inject([BandBotService], (service: BandBotService) => {
    expect(service).toBeTruthy();
  }));
});
