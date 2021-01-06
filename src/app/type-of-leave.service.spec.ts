import { TestBed } from '@angular/core/testing';

import { TypeOfLeaveService } from './type-of-leave.service';

describe('TypeOfLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeOfLeaveService = TestBed.get(TypeOfLeaveService);
    expect(service).toBeTruthy();
  });
});
