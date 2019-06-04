import { TestBed } from '@angular/core/testing';

import { AnimalSService } from './animal-s.service';

describe('AnimalSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimalSService = TestBed.get(AnimalSService);
    expect(service).toBeTruthy();
  });
});
