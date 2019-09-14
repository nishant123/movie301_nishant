import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { UserDetailService } from './userDetails.service';
describe('UserDetailService', () => {
  let service: UserDetailService;
  beforeEach(() => {
    const storeStub = { dispatch: arg => ({}) };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserDetailService, { provide: Store, useValue: storeStub }]
    });
    spyOn(UserDetailService.prototype, 'getUserDetailData');
    service = TestBed.get(UserDetailService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(UserDetailService.prototype.getUserDetailData).toHaveBeenCalled();
    });
  });
  describe('getUserDetailData', () => {
    it('makes expected calls', () => {
     // const storeStub: Store = TestBed.get(Store);
      //spyOn(storeStub, 'dispatch').and.callThrough();
      (<jasmine.Spy>service.getUserDetailData).and.callThrough();
      service.getUserDetailData();
      //expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
});
