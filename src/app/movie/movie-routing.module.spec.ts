import { TestBed } from '@angular/core/testing';
import { MovieRoutingModule } from './movie-routing.module';
describe('MovieRoutingModule', () => {
  let pipe: MovieRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MovieRoutingModule] });
    pipe = TestBed.get(MovieRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
