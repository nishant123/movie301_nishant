import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
describe('MovieService', () => {
  let service: MovieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.get(MovieService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
