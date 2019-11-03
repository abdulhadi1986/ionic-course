import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ];
  getBookings() {
    return [...this._bookings];
  }
  constructor() { }
}
