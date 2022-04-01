import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceComponent } from './invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { PaynowComponent } from './paynow/paynow.component';
import { PaysuccesfullyComponent } from './paysuccesfully/paysuccesfully.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent, children:[
    {path: '', component: ListInvoiceComponent},
    {path: 'add', component: AddInvoiceComponent},
    {path: 'view/:id', component: ViewInvoiceComponent},
    {path: 'edit/:id', component: EditInvoiceComponent},
    {path: 'paynow', component: PaynowComponent},
    {path: 'paysucessfully', component: PaysuccesfullyComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
