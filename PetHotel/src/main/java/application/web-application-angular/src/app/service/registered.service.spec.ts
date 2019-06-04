import { TestBed } from '@angular/core/testing';

import { RegisteredAnimalsService } from './registered-animals.service';

describe('RegisteredAnimalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisteredAnimalsService = TestBed.get(RegisteredAnimalsService);
    expect(service).toBeTruthy();
  });
});
