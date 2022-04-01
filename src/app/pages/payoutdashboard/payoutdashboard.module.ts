import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutdashboardRoutingModule } from './payoutdashboard-routing.module';
import { PayoutdashboardComponent } from './payoutdashboard.component';


@NgModule({
  declarations: [
    PayoutdashboardComponent
  ],
  imports: [
    CommonModule,
    PayoutdashboardRoutingModule
  ]
})
export class PayoutdashboardModule { }
