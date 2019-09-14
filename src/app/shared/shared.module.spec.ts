import { TestBed } from '@angular/core/testing';
import { SharedModule } from './shared.module';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
describe('SharedModule', () => {
  let pipe: SharedModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SharedModule] });
    pipe = TestBed.get(SharedModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
