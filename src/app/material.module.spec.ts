import { TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';
describe('MaterialModule', () => {
  let pipe: MaterialModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MaterialModule] });
    pipe = TestBed.get(MaterialModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
