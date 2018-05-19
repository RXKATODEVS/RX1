import { TestBed, inject } from '@angular/core/testing';

import { MessegesService } from './messeges.service';

describe('MessegesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessegesService]
    });
  });

  it('should be created', inject([MessegesService], (service: MessegesService) => {
    expect(service).toBeTruthy();
  }));
});
