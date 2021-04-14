import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailsService } from 'src/app/services/cardetails.service';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails:CarDetails[]=[]
  carImages:CarImage[]=[]
  dataLoaded=false
  currentImage:CarImage
  Path = "https://localhost:44349"


  constructor(
    private carDetailsService:CarDetailsService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {
        if(params["brandId"])
        {
          this.getCarsByBrand(params["brandId"])
        }
        if(params["colorId"])
        {
          this.getCarsByColor(params["colorId"])
        }
        if(params["carId"])
        {
          this.getCarImagesByCarId(params["carId"])
        }
        else
        {
          this.getCarDetails()
          this.getCarImages()
        }
      }
      )
  }

  getCarDetails(){
    this.carDetailsService.getCarDetails().subscribe(response => {
      this.carDetails=response.data
      this.carImages=this.carDetails[0].carImage
      this.dataLoaded=true
    })
  }

  getCarImages(){
    this.carImageService.getImages().subscribe(response => {
      this.carImages=response.data
      this.dataLoaded=true
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesById(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number)
  {
    this.carDetailsService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetails=response.data
      this.dataLoaded=true
    })
  }
  getCarsByColor(colorId:number)
  {
    this.carDetailsService.getCarsByColor(colorId).subscribe(response => {
      this.carDetails=response.data
      this.dataLoaded=true
    }) 
  }
  
  getCarDetailsByCarId(carId: number) {
    this.carDetailsService.getCarById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }


  getCarByCarId(carId:number){
    this.carDetailsService.getCarById(carId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }

  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }


}
