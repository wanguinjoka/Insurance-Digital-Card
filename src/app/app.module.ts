import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CustomerComponent } from './components/customer/customer.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { CustomerserviceService } from './services/customerservice.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavbarComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
