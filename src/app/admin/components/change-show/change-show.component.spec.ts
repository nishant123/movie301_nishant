import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatDialog } from '@angular/material';
import { ChangeShowComponent } from './change-show.component';
describe('ChangeShowComponent', () => {
  let component: ChangeShowComponent;
  let fixture: ComponentFixture<ChangeShowComponent>;
  beforeEach(() => {
    const adminServiceStub = {
      searchMovie: value => ({ subscribe: () => ({}) }),
      valuechanges: value => ({ subscribe: () => ({}) }),
      saveNowPlaying: (nowPlaying, arg1) => ({})
    };
    const matDialogStub = { open: successDialog => ({}), closeAll: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChangeShowComponent],
      providers: [
        { provide: AdminService, useValue: adminServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(ChangeShowComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('nowShowing defaults to: []', () => {
    component.nowShowing = [];
    expect(component.nowShowing).toEqual([]);
  });
  // it('nowPlaying defaults to: []', () => {

  //   expect(component.movieInput).toEqual(from({}));
  // });
  it('nowPlaying defaults to: []', () => {
    expect(component.nowPlaying).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const adminServiceStub: AdminService = fixture.debugElement.injector.get(
        AdminService
      );
      component.ngOnInit();
    });
    it('should call addmovie', () => {
      component.addMovie(Array);
    });
    it('should call cancel', () => {
      component.cancel();
    });
  });
  describe('save', () => {
    it('makes expected calls', () => {
      const adminServiceStub: AdminService = fixture.debugElement.injector.get(
        AdminService
      );
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(adminServiceStub, 'saveNowPlaying').and.callThrough();
      spyOn(matDialogStub, 'open').and.callThrough();
      component.save();
      expect(adminServiceStub.saveNowPlaying).toHaveBeenCalled();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
  describe('dialogOk', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'closeAll').and.callThrough();
      component.dialogOk();
      expect(matDialogStub.closeAll).toHaveBeenCalled();
    });
  });
});
