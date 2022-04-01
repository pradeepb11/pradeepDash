import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NupayRoutingModule } from './nupay-routing.module';
import { NupayComponent } from './nupay.component';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NupayComponent
  ],
  imports: [
    CommonModule,
    NupayRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NupayModule { }
