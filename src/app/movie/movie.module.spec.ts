import { TestBed } from '@angular/core/testing';
import { MovieModule } from './movie.module';
import { SeatReservationModalComponent } from '../shared/components/modals/seat-reservation-modal/seat-reservation-modal.component';
import { PreBookingComponent } from '../shared/components/modals/pre-booking/pre-booking.component';
describe('MovieModule', () => {
  let pipe: MovieModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MovieModule] });
    pipe = TestBed.get(MovieModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
