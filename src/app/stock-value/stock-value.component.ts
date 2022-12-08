import { Component, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { JsonServiceService } from '../services/json-service.service';

@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrls: ['./stock-value.component.scss']
})
export class  StockValueComponent  {

  disColumns: string[] = ['stock', 'date', 'value'];
  
  @Input() data!: MatTableDataSource<any>;
  @Input() stock_id :any;
  @Input() name :any;

  constructor(private client:JsonServiceService) { 
   
  }


  ngOnInit(){
    
  }
 

 ExportJsonFile(id:any){

  this.client.DownloadJson(id).subscribe(
    response=>{
      let file=response.headers.get('content-disposition')
      ?.split(',')[1].split(':')[1];
      let blob:Blob=response.body as Blob;
      let a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.click();
    }
  )

 }



}
