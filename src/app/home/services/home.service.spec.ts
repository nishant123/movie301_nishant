import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
describe('HomeService', () => {
  let service: HomeService;
  beforeEach(() => {

    // const HomeServiceStubMock = [
    //   {
    //     id: 2,
    //     name: 'LSG_TEST_Group',
    //   },
    // ];
    // const HomeServiceStub = {
    //   movies: {
    //     subscribe: (success, err) => {
    //       const error = {
    //         message: 'service failed',
    //       };
    //       success(HomeServiceStubMock);
    //       err(error);
    //     },
    //   },
    // };
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

    const storeStub = { dispatch: arg => ({}) };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ HomeService, { provide: Store, useValue: storeStub } , { provide: HttpClient, useValue: httpClientStub }]
    });

    service = TestBed.get(HomeService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('genres defaults to: []', () => {
    expect(service.genres).toEqual([]);
  });
  it('should call getGenres', () => {
    service.getGenres();
  });
  it('should call fetchGenres', () => {
    service.fetchGenres();
  });
  it('should call getCastAndCrew', () => {
    const movies = [];
    service.getCastAndCrew(movies);
  });
  it('should call getTheaterList', () => {
    service.getTheaterList();
  });
  it('should call getNowshowing', () => {
    const movies = [];
    service.getNowshowing();
  });
  it('should call getUpcomingMovies', () => {
    service.getUpcomingMovies();
  });
  it('should call getUserPreference', () => {
    service.getUserPreference();
  });
  it('should call setPreference', () => {
    service.setPreference('12', '1');
  });




  describe('fetchGenres', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      // service.fetchGenres().subscribe(res => {
      //   expect(res).toEqual();
      // });
     // const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      // expect(req.request.method).toEqual('GET');
      // req.flush();
      httpTestingController.verify();
    });
  });
  describe('getTheaterList', () => {
    // it('makes expected calls', () => {
    //   const httpTestingController = TestBed.get(HttpTestingController);
    //   // const storeStub: Store = TestBed.get(Store);
    //   // spyOn(storeStub, 'dispatch').and.callThrough();
    //   // service.getTheaterList().subscribe(res => {
    //   //   expect(res).toEqual();
    //   // });
    //   const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
    //   expect(req.request.method).toEqual('GET');
    //  // expect(storeStub.dispatch).toHaveBeenCalled();
    //   req.flush();
    //   httpTestingController.verify();
    // });
  });
  describe('getUserPreference', () => {
    // it('makes expected calls', () => {
    //   const httpTestingController = TestBed.get(HttpTestingController);
    //   // service.getUserPreference().subscribe(res => {
    //   //   //expect(res).toEqual();
    //   // });
    //   const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
    //   expect(req.request.method).toEqual('GET');
    //   req.flush();
    //   httpTestingController.verify();
    // });
  });
});
