import { Component, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service';
import { Booking } from './model/booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingsService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingsService.getBookings();
  }
  onCancelBooking(bookingId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('canceled booking', bookingId);
  }
}
