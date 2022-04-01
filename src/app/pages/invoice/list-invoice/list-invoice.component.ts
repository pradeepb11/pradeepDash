import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../../service/invoice.service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import flatpickr from 'flatpickr';
import {NotificationService} from '../../../service/notification.service';


@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss'],
  providers:[InvoiceService]
})
export class ListInvoiceComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  loading: boolean = true;
  MessageDataInfo: boolean = false;

  datePickerConfig ={
    format: 'YYYY-MM-DD HH:mm:ss',
   
 
  }
  listOfInvoice: any;
  timeout:any;
  loader = false;
  overlay = false;
  filterName:string;
  p: number = 1;

  filterFormData: FormGroup;





  public statusList = [
    {name:'paid'},
    {name: 'paynow'},
    {name: 'pending'}
  ]

  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };
    flatpickr(".flatpickr-minimum", {
      enableTime: false,
      weekNumbers: true, 
      dateFormat: 'Y/m/d',
  
    });

    this.getInvoiceList();
    // this.listOfInvoice = this.invoiceList;
    this.setFormValidate();
    




  }

  filterSearchItems(){

    let test = this.filterFormData.value;
  
    let status = this.filterFormData.get('status')?.value;
    let invoice_number = this.filterFormData.get('invoice_number')?.value;
    let amount = this.filterFormData.get('amount')?.value;
    let invoice_peroid_startdate = this.filterFormData.get('invoice_peroid_startdate')?.value;
    let customer = this.filterFormData.get('customer')?.value;
    let customer_contact = this.filterFormData.get('customer_contact')?.value;
    let customer_email = this.filterFormData.get('customer_email')?.value;
    // console.log(invoice_number)

    if(status != null || invoice_number != null || amount != null || invoice_peroid_startdate != null || customer != null  || customer_contact != null || customer_email != null){


    this.invoiceService.getInvoice()
    .subscribe(
      (res) =>{

        for (let i = 0; i < res.length; i++) {
          const ElementA = res[i];
          // console.log(ElementA.invoice_number)
            if(status === ElementA.status){
              const statuspaidData = res.filter((a:any) => {
                return a.status === ElementA.status;
              }) 
             
              this.loading = true;
              setTimeout(()=>{
                this.loading = false;
                this.MessageDataInfo = false;
                this.listOfInvoice = statuspaidData;
              },1000)
             
    
            } else if(invoice_number === ElementA.invoice_numbers){
              const statusinvoiceNumData = res.filter((a:any) => {
                return a.status === ElementA.status;
              }) 
              console.log(statusinvoiceNumData)
            }
        }
        
        
        
     
        
      
      }
    )
  }else{
    console.log('any one data valid');
    this.notificationService.showError('dsadsa', 'Please Enter Any One Input Value');
  }

  }

  filterClearData(){
    this.getInvoiceList();
  }

  setFormValidate(){
    this.filterFormData = this.fb.group({
      status: new FormControl(),
      invoice_number: new FormControl(),
      amount: new FormControl(),
      invoice_peroid_startdate: new FormControl(),
      customer: new FormControl(),
      customer_contact: new FormControl(),
      customer_email: new FormControl()
    })
  }

  goToUrl():void{

    this.loader = true;
    this.overlay = true

    setTimeout(() => {
      this.loader = false;
      this.overlay = false;
      window.location.href='http://localhost:4300/';
    }, 2000);

   
  }

  getInvoiceList(){
    this.invoiceService.finalInvoiceData()
    .subscribe(
      (res) =>{
        console.log(res[0].data.items);
        if(res.length == null || res.length == 0){
          this.MessageDataInfo = true;
        console.log('response Not Here');
         
          this.loading = false;
        }else{
          this.loading = true;
          setTimeout(()=>{
            this.loading = false;
            this.MessageDataInfo = false;
            this.listOfInvoice = res;
          },2000)
        
          
          
        }

        
      }
    )
  }

}
