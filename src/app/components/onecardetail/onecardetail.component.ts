import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarDetailsService } from 'src/app/services/cardetails.service';

@Component({
  selector: 'app-onecardetail',
  templateUrl: './onecardetail.component.html',
  styleUrls: ['./onecardetail.component.css']
})
export class OnecardetailComponent implements OnInit {

  cars:CarDetails[]=[]
  images:CarImage[]
  currentImage:CarImage
  dataLoaded=false
  Path ="https://localhost:44349"

  constructor(
    private carDetailsService:CarDetailsService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarById(params["carId"])  
      }
    })
  }

  getCarById(carId:number){
    this.carDetailsService.getCarById(carId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
      this.images=this.cars[0].carImage
    })
  }

  getCurrentImageClass(image: CarImage) {
    if (image == this.images[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.images[0]) {
      return 'active';
    } else {
      return '';
    }
  }

}

