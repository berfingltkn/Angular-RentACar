import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl="https://localhost:44348/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getall";
    const data = this.httpClient.get<ListResponseModel<CarImage>>(newPath);
    console.log(data);
  
    return data
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getByCarId?carId="+carId;  
    const data = this.httpClient.get<ListResponseModel<CarImage>>(newPath);
    console.log(data);
    
    return data
  }

}
