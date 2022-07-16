import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CartsComponent } from './modules/carts/carts.component';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { HomeComponent } from './modules/home/home.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    CartsComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CommonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
