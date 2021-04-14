import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/cardetails';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl="https://localhost:44349/api/"
  
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<ListResponseModel<CarDetails>>
  {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>
  {
    let newPath = this.apiUrl + "cars/getbybrand?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>
  {
    let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarById(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getbycarid?carId="+ carId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  

}
