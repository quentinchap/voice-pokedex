/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LuisService } from './luis.service';

describe('LuisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuisService]
    });
  });

  it('should ...', inject([LuisService], (service: LuisService) => {
    expect(service).toBeTruthy();
  }));
});
