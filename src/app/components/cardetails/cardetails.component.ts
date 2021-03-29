import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/models/cardetails';
import { CarDetailsService } from 'src/app/services/cardetails.service';


@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails:CarDetails[]=[]
  dataLoaded=false

  constructor(private carDetailsService:CarDetailsService) { }

  ngOnInit(): void {this.getCarDetails()}

  getCarDetails(){
    this.carDetailsService.getCarDetails().subscribe(response => {
      this.carDetails=response.data
      this.dataLoaded=true
    })
  }

}
