import { Component, OnInit } from '@angular/core';

import flatpickr from 'flatpickr'

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {
  
  invoiceAddForm:any;
  currencyList:any;

  public currency =[
    {id:1, name:'Afghan Afghani', code:'AFN'},
    {id:2, name:'Albanian Lek', code:'ALL'},
    {id:3, name:'Algerian Dinar', code:'DZD'},
    {id:4, name:'Angolan Kwanza', code:'AOA'},
    {id:5, name:'Argentine Peso', code:'ARS'},
    {id:6, name:'Armenian Dram', code:'AMD'},
    {id:7, name:'Aruban Florin', code:'AWG'},
    {id:8, name:'Australian Dollar', code:'AUD'},
    {id:9, name:'Azerbaijani Manat', code:'AZN'},
    {id:10, name:'Bahamian Dollar', code:'BSD'},
    {id:11, name:'Bahraini Dinar', code:'BHD'},
    {id:12, name:'Bangladeshi Taka', code:'BDT'},
    {id:13, name:'Barbadian Dollar', code:'BBD'},
    {id:14, name:'Belarusian Ruble', code:'BYR'},
    {id:15, name:'Belgian Franc', code:'BEF'},
    {id:16, name:'Indian Rupee', code:'INR'},
    {id:17, name:'US Dollar', code:'USD'},
    {id:18, name:'Tunisian Dinar', code:'TND'},
  ];


  constructor() { }

  ngOnInit(): void {

    
    this.currencyList = this.currency


    flatpickr(".flatpickr-minimum");
			flatpickr(".flatpickr-datetime", {
				enableTime: true,
				dateFormat: "Y-m-d H:i",
			});


  }

  onaddinvoiceForm(){
    
  }

}
