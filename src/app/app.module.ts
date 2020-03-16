import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSliderModule, MatMenuModule, MatGridListModule, MatStepperModule, MatCardModule, MatTabsModule, MatExpansionModule, MatChipsModule, MatButtonToggleModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NewnavComponent } from './newnav/newnav.component';

import { LoactionComponent } from './loaction/loaction.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { Course1Component } from './course1/course1.component';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from 'src';
import { MainComponent } from './main/main.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
  
    RegisterComponent,
 
    NewnavComponent,
    LoactionComponent,
  
  
    HomeComponent,
  
    Course2Component,
  
    Course3Component,
  
    Course1Component,
  
    MainComponent,
  
    AlertComponent,
  
    


    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatCheckboxModule,FormsModule,MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
