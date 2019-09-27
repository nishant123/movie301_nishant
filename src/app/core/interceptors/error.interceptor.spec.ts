import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { SnackBarService } from '../Snack-Bar/snack-bar.service';
import { LogService } from '../../shared/service/log.service';
import { ServerErrorInterceptor } from './error.interceptor';
describe('ServerErrorInterceptor', () => {
  let service: ServerErrorInterceptor;
  beforeEach(() => {
    const httpRequestStub = {};
    const httpHandlerStub = { handle: request => ({ catch: () => ({}) }) };
    const routerStub = {};
    const snackBarServiceStub = { error: rEQUESTTIMEOUT => ({}) };
    const logServiceStub = {
      warn: arg => ({}),
      info: arg => ({}),
      error: arg => ({}),
      fatal: arg => ({}),
      log: status => ({})
    };
    TestBed.configureTestingModule({
      providers: [
        ServerErrorInterceptor,
        { provide: HttpRequest, useValue: httpRequestStub },
        { provide: HttpHandler, useValue: httpHandlerStub },
        { provide: Router, useValue: routerStub },
        { provide: SnackBarService, useValue: snackBarServiceStub },
        { provide: LogService, useValue: logServiceStub }
      ]
    });
    service = TestBed.get(ServerErrorInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      const snackBarServiceStub: SnackBarService = TestBed.get(SnackBarService);
      const logServiceStub: LogService = TestBed.get(LogService);
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(snackBarServiceStub, 'error').and.callThrough();
      spyOn(logServiceStub, 'warn').and.callThrough();
      spyOn(logServiceStub, 'info').and.callThrough();
      spyOn(logServiceStub, 'error').and.callThrough();
      spyOn(logServiceStub, 'fatal').and.callThrough();
      spyOn(logServiceStub, 'log').and.callThrough();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(snackBarServiceStub.error).toHaveBeenCalled();
      expect(logServiceStub.warn).toHaveBeenCalled();
      expect(logServiceStub.info).toHaveBeenCalled();
      expect(logServiceStub.error).toHaveBeenCalled();
      expect(logServiceStub.fatal).toHaveBeenCalled();
      expect(logServiceStub.log).toHaveBeenCalled();
    });
  });
});
