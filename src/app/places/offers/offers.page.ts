import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place.model';
import { PlaceService } from '../services/place.service';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private placeService: PlaceService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placeService.getAllPlaces();
  }
  onEditOption(placeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('sliding item option clicked ');
    //this.router.navigate(['places', 'tabs', 'offers', 'edit', placeId]);
    }
}
