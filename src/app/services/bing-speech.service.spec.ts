/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeechToTextService } from './speech-to-text.service';

describe('SpeechToTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechToTextService]
    });
  });

  it('should ...', inject([SpeechToTextService], (service: SpeechToTextService) => {
    expect(service).toBeTruthy();
  }));
});
