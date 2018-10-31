import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../services/customerservice.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  constructor( private customerService: CustomerserviceService) { }
    customers : Customer[];
  ngOnInit(){
    this.customerService.getCustomers().subscribe(customers => {
      // console.log(customers);
      this.customers = customers;
    });
  }

}
interface Customer{
  id?:string;
  name?:string;
  policyno?: string;
  carreg?: string;
  insurance?: string;
  startdate?: DatePipe;
  expirydate?: DatePipe;
}
