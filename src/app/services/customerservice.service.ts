import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  customerCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;

  constructor(public afs: AngularFirestore) {
    // this.customers = this.afs.collection('customers').valueChanges();
    this.customerCollection = this.afs.collection('customers');

    this.customers = this.afs.collection('customers').snapshotChanges().pipe(map(changes => 
      changes.map(a => {
        const data = a.payload.doc.data() as Customer;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
   }
   
   getCustomers(){
     return this.customers;
   }
   addCustomer(customer: Customer){
     this.customerCollection.add(customer);
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

