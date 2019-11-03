import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place.model';
import { PlaceService } from '../services/place.service';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  allPlaces: Place[];
  constructor(private placeService: PlaceService, private menuController: MenuController) { }

  ngOnInit() {
    this.allPlaces = this.placeService.getAllPlaces();
  }

  onOpenMenu() {
    this.menuController.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
