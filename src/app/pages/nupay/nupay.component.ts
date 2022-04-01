import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-nupay',
  templateUrl: './nupay.component.html',
  styleUrls: ['./nupay.component.scss']
})
export class NupayComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  

  constructor() { }


  ngOnDestroy(): void {
    $.fn['dataTable'].ext.search.pop();
  }


  ngOnInit(): void {

    this.dtOptions = {
      ajax: './assets/json/nupay.json',
      columns: [{
        title: 'nupay_log_id',
        data: 'nupay_log_id'
      }, {
        title: 'log_from name',
        data: 'log_from'
      }, {
        title: 'log_name',
        data: 'log_name'
      },{
        title: 'log_type',
        data: 'log_type'
      },{
        title: 'log_blob',
        data: 'log_blob',
        width:'100px'
      },{
        title: 'txnRefNo',
        data: 'txnRefNo'
      },{
        title: 'merchant_id',
        data: 'merchant_id'
      },{
        title: 'timestamp',
        data: 'timestamp'
      }
    
    
    ]
    };

  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

}
