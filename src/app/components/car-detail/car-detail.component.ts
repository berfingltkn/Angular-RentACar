import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../../models/carDetails';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit{
cars:CarDetails[]=[];

constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
       this.getCarDetailByCarId(params["carId"])
       console.log("EEEEEEEE"); 
      } 
    })
  }
  getCarDetailByCarId(carId:number){ 
    
    this.carService.getCarDetailByCarId(carId).subscribe(response=>{
      this.cars=response.data; console.log("deneme123 -> ", this.cars); 
      })//burası car id ye göre cars ı getiriyor aşkım log görünmüyor burası değil 
  }




}
