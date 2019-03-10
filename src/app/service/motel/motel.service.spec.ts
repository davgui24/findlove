import { TestBed } from '@angular/core/testing';
import { MotelService } from './motel.service';


describe('MotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotelService = TestBed.get(MotelService);
    expect(service).toBeTruthy();
  });
});
