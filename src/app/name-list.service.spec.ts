import { TestBed } from '@angular/core/testing';

import { NameListService } from './name-list.service';

describe('NameListService', () => {
  let service: NameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
