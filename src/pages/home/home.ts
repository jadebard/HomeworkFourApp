import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvide} from "../../providers/data/data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rockandroll: {};
  country: {};
  musical: {};

  constructor(public navCtrl: NavController, public dataService: DataProvide) {
      this.rockandroll = this.dataService.getRockData();
      this.country = this.dataService.getCountryData();
      this.musical = this.dataService.getMusicalData();
  }

}
