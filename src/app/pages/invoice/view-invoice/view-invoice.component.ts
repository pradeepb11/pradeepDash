import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { InvoiceService } from 'src/app/service/invoice.service';




@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss'],
  providers: [InvoiceService]
})
export class ViewInvoiceComponent implements OnInit {

  invoiceId:any ;
  invoiceData:  any ;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(data=>{
      // console.log(data);
      this.invoiceId = data;
      console.log(this.invoiceId);
    })

    this.getsingleInvoice();

  }


  getsingleInvoice(){
    this.invoiceService.getSingleInvoiceData(this.invoiceId)
    
    .subscribe(
      (res) => {
       console.log(res)
        this.invoiceData =  Array.of(res);
      
      }
    )
  }

  payInvoice(){
    alert('pay Online')
  }

}
