import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/model/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    console.log('closing the modal');
    // the id of the modal this is optional but good to have in case there is more than one opened 
    this.modalCtrl.dismiss(null, 'cancel' ,'bookingPlace' );
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!', placeId: this.selectedPlace.id}, 'confirm', 'bookingPlace');

  }

}
