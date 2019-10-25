import { Component, OnInit } from '@angular/core';
import { PlaceService } from './services/place.service';
import { Place } from '../model/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

}
