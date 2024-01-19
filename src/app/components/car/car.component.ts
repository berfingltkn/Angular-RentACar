import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { HttpClient } from '@angular/common/http';// backend api ye bu import sayesinde istekte bulunabiliriz.
import { CarService } from '../../services/car.service';
import { CarDetails } from '../../models/carDetails';
import { CarImage } from '../../models/carImage';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';
import { CarImageService } from '../../services/car-image.service';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { log } from 'console';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
cars:CarDetails[]=[]; 
brands:Brand[]=[];
colors:Color[]=[];

carImages:CarImage[]=[];
baseUrl="https://localhost:44348/Uploads/Images/";
imageOfPath:string;
filterText="";
brandFilter:number=0;
colorFilter:number=0;
branddFilter:number=0;
colorrFilter:number=0;
carDetailFilter='';
dataLoaded=false;

constructor(
  private carService:CarService,
  private brandService:BrandService,
  private colorService:ColorService,
  private carImageService:CarImageService,
  private activatedRoute:ActivatedRoute,

  ){}

  ngOnInit(): void {

    this.getBrands();
    this.getColors();

    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarDetailByColorAndBrand(params["colorId"],params["brandId"])
      }
      
      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      
      else if(params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getCars();
      }
    })
  }
  
 

getCars(){ 
  this.carService.getCars().subscribe(response=>{this.cars=response.data; console.log("Osmaniye 80", this.cars )});
}
getBrands(){
  this.brandService.getBrands().subscribe(response=>{this.brands=response.data});
}
getColors(){
  this.colorService.getColors().subscribe(response=>{this.colors=response.data});
}

getCarsByBrand(brandId:number){ //kullanmamışım, birde ben colorFilter ya da brandfilterlarla alakalı olduğunu düşündüm bir
  this.carService.getCarsByBrand(brandId).subscribe(response=>{
    console.log(response.data, "denemee"); 
    
    this.cars=response.data;
  })
}

getCarsByColor(colorId:number){
  this.carService.getCarsByColor(colorId).subscribe(response=>{
    console.log(response)
    this.cars=response.data;
//aşkım id alıyor mu acaba
  })
  
}

getSelectedBrand(brandId: number) {
  debugger;
  if (this.brandFilter == brandId) return true;
  else return false;
}

getSelectedColor(colorId:number){
  if(this.colorFilter == colorId){
    return true;
    console.log(this.colorFilter);
  } 
  else return false;
}

getCarDetailByColorAndBrand(colorId: number, brandId: number) {
  this.carService.getCarDetailByColorAndBrand(colorId, brandId)
    .subscribe((response) => { 
      console.log(response)
      this.cars = response.data;
    });
}



image(carId:number){
  this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
    const imagePath=response.data[0].imagePath
    this.imageOfPath= this.baseUrl+imagePath;
    console.log("ssssdd",this.imageOfPath)
  })
  return this.imageOfPath 
  
}




}
