import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { AdminService } from './admin.service';
describe('AdminService', () => {
  let service: AdminService;
  beforeEach(() => {
    const httpClientStub = {
      get: arg1 => ({
        subscribe: (success, err) => {
          const obj = {
            results: [
              {
                casts: ['t4', 't5']
              }
            ],
            users: ['u1', 'u2'],
            theaters: ['t1', 't2'],
            cast: ['t6', 't7', 't8', 't9'],
            crew: ['t3', 't6']
          };
          const error = {
            message: 'Error'
          };
          success(obj);
          // err(error);
        }
      }),
      put: arg1 => ({
        subscribe: success => {
          const obj = [
            {
              theaters: {}
            }
          ];
          success(obj);
          return {};
        }
      }),
      post: (arg1, arg2) => ({ pipe: () => ({ pipe: () => ({}) }) })
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService, { provide: HttpClient, useValue: httpClientStub }]
    });
    service = TestBed.get(AdminService);

  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('should call newtheater', () => {
    expect(service.newTheater).toBeDefined();
    service.newTheater('data');
  });
  it('should call searchMovie', () => {
    expect(service.searchMovie).toBeDefined();
    service.searchMovie('data');
  });
  it('should call saveNowPlaying', () => {
    expect(service.saveNowPlaying).toBeDefined();
    service.saveNowPlaying('data', '2');
  });
});
