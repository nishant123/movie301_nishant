import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';
import { UiService } from './ui-service.service';
describe('UiService', () => {
  let service: UiService;
  beforeEach(() => {
    const matSnackBarStub = { open: (message, action, object) => ({}) };
    TestBed.configureTestingModule({
      providers: [
        UiService,
        { provide: MatSnackBar, useValue: matSnackBarStub }
      ]
    });
    service = TestBed.get(UiService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
