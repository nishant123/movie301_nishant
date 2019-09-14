import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieComponent } from './movie.component';
describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  beforeEach(() => {
    const storeStub = {
      select: nowPlayingMoviesSelector => ({ subscribe: () => ({}) })
    };
    const activatedRouteStub = { params: { subscribe: () => ({}) } };
    const movieServiceStub = {
      getMovie: id => ({ subscribe: () => ({}) }),
      getCastAndCrew: id => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MovieComponent],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: MovieService, useValue: movieServiceStub }
      ]
    });
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      // const storeStub: Store = fixture.debugElement.injector.get(Store);
      // spyOn(storeStub, 'select').and.callThrough();
      component.ngOnInit();
      // expect(storeStub.select).toHaveBeenCalled();
    });
  });
  describe('ngAfterContentInit', () => {
    it('makes expected calls', () => {
      const movieServiceStub: MovieService = fixture.debugElement.injector.get(
        MovieService
      );
      spyOn(movieServiceStub, 'getMovie').and.callThrough();
      spyOn(movieServiceStub, 'getCastAndCrew').and.callThrough();
      component.ngAfterContentInit();
      expect(movieServiceStub.getMovie).toHaveBeenCalled();
      expect(movieServiceStub.getCastAndCrew).toHaveBeenCalled();
    });
  });
});
