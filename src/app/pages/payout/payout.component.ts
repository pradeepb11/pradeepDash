import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit  } from '@angular/core';
import {InvoiceService} from '../../service/invoice.service';
import {Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import flatpickr from 'flatpickr';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
declare const $:any ;
import { IDayCalendarConfig, DatePickerComponent } from "ng2-date-picker";
import * as dayjs from 'dayjs';



@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss'],
  providers:[InvoiceService, DatePipe]
})
export class PayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  productList:any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Loading: false;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  filterForm: FormGroup;
  // pipe: DatePipe;
  test:any;
  todayDate:Date;
  isUser:any = false;
  @ViewChild('dTable', {static:false}) dataTable:any;
  p: number = 1;
  filterTerm: string;
  start_Date: any;
  end_Date:any;
  
  dateTo = dayjs();
  dateFrom;





  datePickerConfig ={
    format: 'YYYY-MM-DD HH:mm:ss',
   
 
  }

  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.dateFrom = dayjs('10.30.2021');
   }


  ngAfterViewInit(): void {
   
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  ngOnInit(): void {




    flatpickr(".flatpickr-minimum", {
      enableTime: true,
      weekNumbers: true, 
      dateFormat: 'Y/m/d H:m:s',
  
    });

   

    this.getallDataProduct();

    this.setfilterFormValidate();
  }

  setfilterFormValidate(){
    this.filterForm = this.fb.group({
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required)
    })
  }



  getallDataProduct(){
 
    this.invoiceService.getlocalnupay()
    .subscribe(
      (res: any) =>{
        // console.log(res.data);
        this.productList = res.data;
        this.dtTrigger.next(res);
      
      }
    )
  }

  
  get fromDate() { return this.filterForm.get('fromDate')?.value }
  get toDate() { return this.filterForm.get('toDate')?.value; }

  reverseAndTimeStamp(dateString:any) {
    const reverse = new Date();
    return reverse.getTime();
  }


  applyFilter(){
  
  this.invoiceService.getlocalnupay()
  .subscribe(
    (res) =>{

      // console.log(this.filterForm.value);
      // console.log(this.datePipe.transform(this.fromDate, 'YYYY-mm-dd HH:mm:ss'));
      // console.log(this.datePipe.transform(this.toDate, 'YYYY-mm-dd HH:mm:ss'));
      // console.log(this.toDate);

      // let start_Date = new Date("2022-03-26 00:00:10");
      //   let end_Date = new Date("2022-03-26 00:02:22");
      
      let start_Date = this.datePipe.transform(this.fromDate, 'YYYY-MM-d HH:mm:ss');
      let end_Date = this.datePipe.transform(this.toDate, 'YYYY-MM-d HH:mm:ss');

      console.log(start_Date);
      console.log(end_Date);

       if(start_Date != null && end_Date != null){
      //  let selectedMembers =  res.data.filter((m:any) => new Date(m.timestamp) >= start_Date && new Date(m.timestamp) <= end_Date);
  
        const selectedMembers = res.data.filter((m:any) =>
     
        // console.log(m.timestamp)
        // console.log((m.timestamp))
        (m.timestamp) >= start_Date! && (m.timestamp) <= end_Date!
        
        )
        
      
       this.productList = selectedMembers;
       console.log( this.productList);
 
       }else{
       console.log('else part');
       this.getallDataProduct();
       }
    }
  )
    
  }

  resetDate(){
    this.getallDataProduct();
  }

}
