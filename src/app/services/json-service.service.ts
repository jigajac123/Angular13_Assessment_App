import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
 

 readonly url:string = " http://localhost:3000/Stocks";
 readonly Uri:string = "https://localhost:7177/api";


  constructor(private client: HttpClient) { }



  GetStockList() : Observable<any[]>{

    return this.client.get<any>(this.url)
  }

  GetStockValue(id:any) : Observable<any[]>{

    return this.client.get<any>(this.Uri + '/StockValuesCLass/'+ id)
  }


   DownloadJson(id:any) {

    return this.client.get(this.Uri + '/StockValuesCLass/'+ id, 
      {observe:'response',responseType:'blob'})
    
  }

}
