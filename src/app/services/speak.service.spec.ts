/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeakService } from './speak.service';

describe('SpeakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakService]
    });
  });

  it('should ...', inject([SpeakService], (service: SpeakService) => {
    expect(service).toBeTruthy();
  }));
});
