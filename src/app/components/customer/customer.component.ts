import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { response } from 'express';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customers:Customer[]=[];
  dataLoaded=false;
  constructor(private customerService:CustomerService)
  {
    
  }
  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers()
  {
    this.customerService.getCustomers().subscribe(Response=>{
      this.customers=Response.data;
      this.dataLoaded=true;
      console.log(Response.data);
    })
  }

}