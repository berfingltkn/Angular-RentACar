import { Component, OnInit } from '@angular/core';
import { CarImage } from '../../models/carImage';
import { CarImageService } from '../../services/car-image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrl: './car-image.component.css'
})
export class CarImageComponent implements OnInit{
carImages:CarImage[]=[];
baseUrl="https://localhost:44348/Uploads/Images/";

constructor(private carImageService:CarImageService, private activedRoute:ActivatedRoute){}
ngOnInit(): void {
  this.activedRoute.params.subscribe(params=>{
    if (params["carId"]) {
      this.getCarImagesByCarId(params["carId"])
    }
  })
}

getCarImagesByCarId(carId:number){
  this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
    this.carImages=response.data;
    console.log(carId);
  })
}

getActiveImageClass(carImage:CarImage){
  if (carImage===this.carImages[0]) {
    return "active"
  } else {
    return ""
  }
}
}
