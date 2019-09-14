import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { UserDetailService } from 'src/app/core/services/userDetails.service';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const homeServiceStub = {
      getNowshowing: () => ({}),
      getTheaterList: () => ({}),
      fetchGenres: () => ({})
    };
    const swUpdateStub = {
      isEnabled: {},
      message: '3',
      available: { subscribe: () => ({
        message: '1', action: '2'
      }) }
    };
    const matSnackBarStub = {
      open: (message, action, object) => ({
        onAction: () => ({ subscribe: () => ({}) })
      })
    };
    const userDetailServiceStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: HomeService, useValue: homeServiceStub },
        { provide: SwUpdate, useValue: swUpdateStub },
        { provide: MatSnackBar, useValue: matSnackBarStub },
        { provide: UserDetailService, useValue: userDetailServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('title defaults to: book-my-movie', () => {
    expect(component.title).toEqual('book-my-movie');
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const homeServiceStub: HomeService = fixture.debugElement.injector.get(
        HomeService
      );
      const matSnackBarStub: MatSnackBar = fixture.debugElement.injector.get(
        MatSnackBar
      );
      spyOn(homeServiceStub, 'getNowshowing').and.callThrough();
      spyOn(homeServiceStub, 'getTheaterList').and.callThrough();
      spyOn(homeServiceStub, 'fetchGenres').and.callThrough();
      spyOn(matSnackBarStub, 'open').and.callThrough();
      component.ngOnInit();
      expect(homeServiceStub.getNowshowing).toHaveBeenCalled();
      expect(homeServiceStub.getTheaterList).toHaveBeenCalled();
      expect(homeServiceStub.fetchGenres).toHaveBeenCalled();
      //expect(matSnackBarStub.open).toHaveBeenCalled();
    });
  });
});
