import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, HttpClientModule, TextMaskModule, MatInputModule, AppRoutingModule, BrowserAnimationsModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, ReactiveFormsModule, MatOptionModule, MatSelectModule, MatIconModule, MatCardModule, MatButtonModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
