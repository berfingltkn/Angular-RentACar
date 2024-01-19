import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { log } from 'console';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{

  brands:Brand[]=[];
  currentBrand?:Brand;
  dataLoaded=false;
  filterText="";

  constructor(private brandService:BrandService){}//service i kullanabilmek için yapmamız gereken.

  ngOnInit(): void {//componentimiz ilk çalıştığında çalışan yerdir.
    this.getBrands();
  }

  getBrands(){
this.brandService.getBrands().subscribe(response=>{
  this.brands=response.data; 
  console.log(this.brands);
  
  this.dataLoaded=true;
  
})
  }

  setCurrentBrand(brand:Brand){ 
    this.currentBrand=brand;
    console.log(this.currentBrand)
  }
  clearCurrentBrand(){
    this.currentBrand=undefined;
  } 

  getCurrentBrandClass(brand:Brand){//seçtigim brandi isaretlememi sagliyor.
if(brand==this.currentBrand){
  return "list-group-item active"
}
else{
  return "list-group-item"
}
  }
 
getAllBrandClass(){
  if(!this.currentBrand){
    return "list-group-item active"
  }
  else{
    return "list-group-item"
  }
}

}
