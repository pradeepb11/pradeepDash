import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutdashboardComponent } from './payoutdashboard.component';

const routes: Routes = [{ path: '', component: PayoutdashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutdashboardRoutingModule { }
