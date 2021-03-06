import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  map,  tap } from 'rxjs/operators'; 


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private _http: HttpClient
  ) { }


  getAllData(){
   return this._http.get('https://fakestoreapi.com/products', httpOptions)
  }

  getnupaydata(){
    return this._http.get('https://merchants.paynet.co.in/dashboardapi/nupay_logs/', httpOptions);
  }

  getlocalnupay(): Observable<any>{
    return this._http.get('./assets/json/nupay.json', httpOptions) 
    catchError(this.handleError)}

  getInvoiceData(): Observable<any>{
    return this._http.get('https://my-json-server.typicode.com/pradeepb11/mockjson/invoice', httpOptions)
    catchError(this.handleError);
  }
// get single Invioce data
 getSingleInvoiceData(invoice: Invoice): Observable<any>{
   return this._http.get(`https://my-json-server.typicode.com/pradeepb11/mockjson/invoice/${invoice.id}`, httpOptions)
 
   catchError(this.handleError);
 }


  finalInvoiceData(): Observable <any>{
    return this._http.get('http://localhost:3000/comments', httpOptions)
    catchError(this.handleError);
  }
  
  private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
        errorMessage = `An error occurred ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

}


interface Invoice{
  id: number;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: string;
  clientName: string;
  clientEmail: string;
  status: string;
  currency: string;
  senderAddress: string;
  
  clientAddress: string;
  items:string;
  
}
