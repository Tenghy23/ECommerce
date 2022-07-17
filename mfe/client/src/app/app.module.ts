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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonInputComponent } from './components/common-input/common-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    CartsComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CommonButtonComponent,
    CommonInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
