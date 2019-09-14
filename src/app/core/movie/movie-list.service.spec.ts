import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { MovieListService } from './movie-list.service';
describe('MovieListService', () => {
  let service: MovieListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieListService]
    });
    service = TestBed.get(MovieListService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('call getlanguagelist', () => {
    const movieList = {movie:[{original_language: '3'}, {original_language: '4'}]};
   // service.original_language = '';
    service.getLanguageList(movieList);
  });
});
