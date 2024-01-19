import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44348/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>>
  {
    let newPath=this.apiUrl+"cars/getcardetails"; 
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }


  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;

    return this.httpClient.get<any>(newPath); 
  }


  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }


  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetails>>{
    
    let newPath=this.apiUrl+"cars/GetCardetailsByCarId?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }


  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl + "cars/GetCarDetailsByColorAndByBrand?colorId="+colorId+ "&brandId=" +brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  

}
