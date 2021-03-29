import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsResponseModel } from '../models/cardetailsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl="https://localhost:44349/api/cars/getcardetails"
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<CarDetailsResponseModel>
  {
    return this.httpClient.get<CarDetailsResponseModel>(this.apiUrl)
  }
}
