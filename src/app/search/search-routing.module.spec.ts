import { TestBed } from '@angular/core/testing';
import { SearchRoutingModule } from './search-routing.module';
describe('SearchRoutingModule', () => {
  let pipe: SearchRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SearchRoutingModule] });
    pipe = TestBed.get(SearchRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
