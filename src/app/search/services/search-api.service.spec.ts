import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SearchApiService } from './search-api.service';
describe('SearchApiService', () => {
  let service: SearchApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchApiService]
    });
    service = TestBed.get(SearchApiService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
