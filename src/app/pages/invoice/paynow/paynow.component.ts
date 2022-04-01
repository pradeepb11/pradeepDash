import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss']
})
export class PaynowComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {


     // Jquery credit card Card Number space between 4 character or number
     $('#creditcardnumber').on('keypress change', function () {
      $(this).val(function (index, value) {
        return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      });
    });

    $('#debitcardnumber').on('keypress change', function () {
      $(this).val(function (index, value) {
        return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      });
    });



  }

  OnpayClick(){
    // e.preventDefault();
    
    console.log('Working');
    this.router.navigate(['/paysucessfully']);
  }

}
