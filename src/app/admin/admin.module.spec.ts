import { TestBed } from '@angular/core/testing';
import { AdminModule } from './admin.module';
describe('AdminModule', () => {
  let pipe: AdminModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AdminModule] });
    pipe = TestBed.get(AdminModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
