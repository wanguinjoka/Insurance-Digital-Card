import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CustomerserviceService } from '../../services/customerservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {Subject} from 'rxjs/Subject';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    // pigdice = "https://annstella.github.io/Pigdice/";
    
    //  public qrdata: Customer[];
  constructor( private customerService: CustomerserviceService) { }
  customers : Customer[];
  ngOnInit(){
    this.customerService.getCustomers().subscribe(customers => {
      // console.log(customers);
      this.customers = customers;
      // this.qrdata = customers;
    });
  }
}
interface Customer{
  id?:string;
  name?:string;
  policyno?: string;
  carreg?: string;
  insurance?: string;
  startdate?: string;
  expirydate?: string;
}
