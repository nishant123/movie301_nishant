import { TestBed } from '@angular/core/testing';
import { SearchModule } from './search.module';
import { SDialogComponent } from './components/s-dialog/s-dialog.component';
describe('SearchModule', () => {
  let pipe: SearchModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SearchModule] });
    pipe = TestBed.get(SearchModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
