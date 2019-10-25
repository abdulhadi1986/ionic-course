import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from 'src/app/model/place.model';
import { PlaceService } from '../../services/place.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router,
              private navController: NavController,
              private placeService: PlaceService,
              private activatedRoute: ActivatedRoute,
              private modalCtrl: ModalController) { }
  place: Place;
  ngOnInit() {
    // to extract the id param from the url
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) {
          this.navController.navigateBack('places/tabs/discover');
          return;
        }
        this.place = this.placeService.getPlaceById(paramMap.get('placeId'));
      }
    );
  }

  onBookPlace() {
    //or this.router.navigateByUrl('places/tabs/discover');
    //or this.router.navigate(['/','places','tabs','discover']);
    //this.navController.navigateBack('places/tabs/discover');
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place},
      id: 'bookingPlace'})
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then( resultData => {
      console.log(resultData.data, //the data we passed 
                  resultData.role); // the role we passed
      if (resultData.role === 'confirm') {
          console.log ('bookd!!');
          console.log ('the Data received: ', resultData.data);
      }
  });

  }
}
