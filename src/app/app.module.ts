import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompareCurrencyComponent } from './components/compare-currency/compare-currency.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CompareCurrencyCustomDialogComponent } from './components/dialogs/compare-currency-custom-dialog/compare-currency-custom-dialog.component'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { ChangeCurrencyDialogueComponent } from './components/dialogs/change-currency-dialogue/change-currency-dialogue.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CompareCurrencyComponent,
    CompareCurrencyCustomDialogComponent,
    ChangeCurrencyDialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
