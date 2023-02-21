import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloonMap',
  templateUrl: './balloonMap.component.html',
  styleUrls: ['./balloonMap.component.css']
})
export class BalloonMapComponent implements OnInit {

  inputLat : number = 0;
  inputLng : number = 0;

  center : google.maps.LatLngLiteral = {lat: 42, lng: -4};
  zoom : number = 2;
  Balloons : google.maps.LatLngLiteral[] = [];
  // Ajoutez une variable de classe qui servira de tableau de marqueurs

  constructor() { }

  ngOnInit() {
    this.Balloons.push({lat:42 , lng: -4})
  }

  addBalloon() : void {
    this.Balloons.push({lat :this.inputLat, lng:this.inputLng})
  }

  clearBalloons() : void {
    this.Balloons = [];
  }







}



