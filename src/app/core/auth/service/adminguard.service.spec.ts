import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminguardService } from './adminguard.service';
describe('AdminguardService', () => {
  let service: AdminguardService;
  beforeEach(() => {
    const activatedRouteSnapshotStub = {};
    const routerStateSnapshotStub = {};
    const routerStub = { navigate: array => ({}) };
    const storeStub = { select: userSelector => ({ subscribe: () => ({}) }) };
    TestBed.configureTestingModule({
      providers: [
        AdminguardService,
        {
          provide: ActivatedRouteSnapshot,
          useValue: activatedRouteSnapshotStub
        },
        { provide: RouterStateSnapshot, useValue: routerStateSnapshotStub },
        { provide: Router, useValue: routerStub },
        { provide: Store, useValue: storeStub }
      ]
    });
    service = TestBed.get(AdminguardService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('canActivate', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = TestBed.get(
        ActivatedRouteSnapshot
      );
      const routerStateSnapshotStub: RouterStateSnapshot = TestBed.get(
        RouterStateSnapshot
      );
      const routerStub: Router = TestBed.get(Router);
     // const storeStub: Store = TestBed.get(Store);
      spyOn(routerStub, 'navigate').and.callThrough();
     // spyOn(storeStub, 'select').and.callThrough();
      service.canActivate(activatedRouteSnapshotStub, routerStateSnapshotStub);
      expect(routerStub.navigate).toHaveBeenCalled();
     // expect(storeStub.select).toHaveBeenCalled();
    });
  });
});
