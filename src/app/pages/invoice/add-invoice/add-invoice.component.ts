
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe } from "@angular/common";

import flatpickr from 'flatpickr'

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  currencyList:any;
  submitted = false;
  invoiceAddForm: FormGroup;
  public customerList: FormArray;
  totalSum: number = 0;
  myFormValueChanges$:any;

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

  public unitsArray = [
    { unitName: "test unit 1", qty: 2, unitPrice: 22.44 },
    { unitName: "test unit 2", qty: 1, unitPrice: 4 },
    { unitName: "test unit 3", qty: 44, unitPrice: 1.5 }
  ];


  constructor(

    private formbuilder: FormBuilder,
    private router: Router,
    private currencyPipe: CurrencyPipe


  ) { }

  ngOnInit(): void {

    this.currencyList = this.currency
    flatpickr(".flatpickr-minimum");
			flatpickr(".flatpickr-datetime", {
				enableTime: true,
				dateFormat: "Y-m-d H:i",
			});

      this.setinvoiceForm();

      this.customerList = this.invoiceAddForm.get('customerAdd') as FormArray;

      this.myFormValueChanges$ = this.invoiceAddForm.controls["customerAdd"].valueChanges;

      this.myFormValueChanges$.subscribe((units:any) =>
        this.updateTotalUnitPrice(units)
      );



  }

  setinvoiceForm(){
    this.invoiceAddForm = this.formbuilder.group({
      date: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      refno: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      customerAdd: this.formbuilder.array([this.createItemFeild()])
    })
  }

  get f() { return this.invoiceAddForm.controls; }

  onaddinvoiceForm(){
    console.log('Working')
  }

  createItemFeild(){
    const numberPatern = "^[0-9.,]+$";
    return this.formbuilder.group({
      description: new FormControl('', Validators.required),
      quantity: new FormControl(1, [Validators.required, Validators.pattern(numberPatern)]),
      unitPrice:  new FormControl('', [Validators.required, Validators.pattern(numberPatern)]),
      unitTotalPrice:  [{ value: "", disabled: true }]
    })
  }

  get customerFormGroup(){
    return this.invoiceAddForm.get('customerAdd') as FormArray;
  }

  

  

  addCustomerInfo(){
    this.customerList.push(this.createItemFeild())
  }


  removeCustomerInfo(index: number){
    this.customerList.removeAt(index);
  }


  private updateTotalUnitPrice(units: any) {
    console.log(units);
    const control = <FormArray>this.invoiceAddForm.controls["customerAdd"];
    // console.log(control.value)
    this.totalSum = 0;

    for (let i in units) {
      // console.log(units[i].quantity)
      // console.log(units[i].unitPrice)
      let totalUnitPrice = units[i].quantity * units[i].unitPrice;
      // console.log(totalUnitPrice)
      // now format total price with angular currency pipe
      let totalUnitPriceFormatted = this.currencyPipe.transform(
        totalUnitPrice,
        "INR",
        "symbol-narrow",
        "1.2-2"
      );

      control.at(+i).get('unitTotalPrice')?.setValue(totalUnitPriceFormatted, {
        onlySelf: true,
        emitEvent: false
      })
      
      // update total price for all units
      this.totalSum += totalUnitPrice;
      // console.log(this.totalSum);
    }


  }

  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
  }

  discountPrice(){

  }





}
