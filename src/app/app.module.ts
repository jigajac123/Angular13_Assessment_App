import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StockValueComponent } from './stock-value/stock-value.component';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
    declarations: [
        AppComponent,
        StockValueComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTableModule,
        HttpClientModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatRadioModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatButtonModule

        
    ]
})
export class AppModule { }
