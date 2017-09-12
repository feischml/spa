import { TestBed, inject } from '@angular/core/testing';

import { CoachesService } from './coaches.service';

describe('CoachesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachesService]
    });
  });

  it('should be created', inject([CoachesService], (service: CoachesService) => {
    expect(service).toBeTruthy();
  }));
});
