import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from 'src/app/model/place.model';
import { ModalController } from '@ionic/angular';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  @ViewChild('bookPlaceForm', {static: false}) form: NgForm;
  startDate: string;
  endDate: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const availableFromDate = new Date(this.selectedPlace.dateFrom);
    const availableToDate = new Date(this.selectedPlace.dateTo);
    console.log('In onINIT, mode is ', this.selectedMode);
    if (this.selectedMode === 'random') {
      
      this.startDate = new Date().toISOString();
      console.log('mode is random , selected date: ', this.startDate);

    }
  }

  onCancel() {
    console.log('closing the modal');
    // the id of the modal this is optional but good to have in case there is more than one opened 
    this.modalCtrl.dismiss(null, 'cancel' ,'bookingPlace' );
  }

  onBookPlace() {    
    this.modalCtrl.dismiss({firstName: this.form.value['firstName'] ,
                            NoOfGuest: this.form.value['guestsNo'],
                            dateFrom: this.form.value['dateFrom'],
                            dateTo: this.form.value['dateTo'],
                            placeId: this.selectedPlace.id}, 'confirm', 'bookingPlace');

  }

  onBookingPlace(bookPlaceForm: FormsModule){
    if (!this.form.valid || !this.areDatesValid()){
      return;
    }
    console.log('the form received' , bookPlaceForm);
    this.onBookPlace();
  }

  areDatesValid(){
    const startDate = new Date (this.form.value['dateFrom']);
    const endDate = new Date (this.form.value['dateTo']);
    return endDate > startDate;
  }
}
