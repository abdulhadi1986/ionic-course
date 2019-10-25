import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place.model';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  constructor(
              private route: ActivatedRoute,
              private placeService: PlaceService,
              private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers'); return;
      }
      this.place = this.placeService.getPlaceById(paramMap.get('placeId'));
    });
  }

}