import { TestBed } from '@angular/core/testing';
import { HomeModule } from './home.module';
import { SeatReservationModalComponent } from '../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component';
import { ConfirmationModalComponent } from '../shared/components/modals/confirmation-modal/confirmation-modal.component';
import { PreBookingComponent } from '../shared/components/modals/pre-booking/pre-booking.component';
describe('HomeModule', () => {
  let pipe: HomeModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HomeModule] });
    pipe = TestBed.get(HomeModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
