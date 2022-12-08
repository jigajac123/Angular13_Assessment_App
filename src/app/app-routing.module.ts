import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockValueComponent } from './stock-value/stock-value.component';


const routes: Routes = [{path:'stockValue',component:StockValueComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
