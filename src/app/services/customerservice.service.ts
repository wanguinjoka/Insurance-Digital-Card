import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  customerCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;

  constructor(public afs: AngularFirestore) {
    this.customers = this.afs.collection('customers').valueChanges();
   }
   getCustomers(){
     return this.customers;
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

