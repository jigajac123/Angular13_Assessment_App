import { Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { JsonServiceService } from './services/json-service.service';
import { StockValueComponent } from './stock-value/stock-value.component';


 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export  class AppComponent  {
  title = 'AngularAppAssess';

 
  displayedColumns: string[] = ['stock', 'industry', 'sector', 'currency_code'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator1!: MatPaginator;
  @ViewChild(MatSort) sort1!: MatSort;


  data2!: MatTableDataSource<any>;

 

   constructor(private retrivejson: JsonServiceService){
   
   }
  

   
   stockExist = false;

  ngOnInit():void {
  this.RefreshStockList();
   
  }
 
  
  RefreshStockList(){
    this.retrivejson.GetStockList().subscribe({
            next:(res)=>{
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator1;
                this.dataSource.sort = this.sort1;
                
            },
            error :(err) =>{
                alert("error while fetching data")
            },
    });
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refreshValue(id : any){
    this.retrivejson.GetStockValue(id).subscribe({
      next:(st)=>{
          this.data2 = new MatTableDataSource(st);
      },
      error :(err) =>{
          alert("error while fetching values ")
      }
});

}
  Name:any;
  Id:any;
   valueClicked(stock: any, name: any) {
      this.stockExist =true;
      this.refreshValue(stock);
      this.Name=name;
      this.Id =stock;
    }
    
}
   
  

  
  
