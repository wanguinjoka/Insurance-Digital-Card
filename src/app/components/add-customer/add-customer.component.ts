import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../services/customerservice.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  qrData:string
  createdCode:boolean=false;

  
  customer: Customer = {
    name:'',
    policyno: '',
    carreg:'',
    insurance: '',
    startdate: '',
    expirydate: '',
  }
  constructor(private customerService: CustomerserviceService) { }
  
  ngOnInit() {
  }
onSubmit(){
  if(this.customer.name != '' && this.customer.carreg != ''){
    this.customerService.addCustomer(this.customer);
    this.createdCode=true
    this.qrData= "Customer Name:"+this.customer.name +"\n" 
                +"Insurance:"+this.customer.insurance +"\n"
                +"Policy No:"+this.customer.policyno +"\n"
                +"Car Reg:"+this.customer.carreg+"\n"
                +"Start Date:"+this.customer.startdate +"\n"
                +"Expiry Date:"+this.customer.expirydate +"\n"
              

    this.customer.name ='';
    this.customer.policyno ='';
    this.customer.carreg ='';
    this.customer.insurance ='';
    this.customer.startdate='';
    this.customer.expirydate ='';
  }
 
}
}
interface Customer {
  id?:string;
  name?:string;
  policyno?: string;
  carreg?: string;
  insurance?: string;
  startdate?: string;
  expirydate?: string;
}
