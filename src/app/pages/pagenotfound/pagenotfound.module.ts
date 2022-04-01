import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    RouterModule
  ]
})
export class PagenotfoundModule { }
