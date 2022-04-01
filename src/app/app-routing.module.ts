import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:"dashboard", pathMatch:'full'
  },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'roles', loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule) },
  { path: 'invoice', loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule) },
  {path:'pagenotfound', loadChildren: () => import('./pages/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)},
  { path: 'payout', loadChildren: () => import('./pages/payout/payout.module').then(m => m.PayoutModule) },
  { path: 'nupay', loadChildren: () => import('./pages/nupay/nupay.module').then(m => m.NupayModule) },
  { path: 'payoutdashboard', loadChildren: () => import('./pages/payoutdashboard/payoutdashboard.module').then(m => m.PayoutdashboardModule) },
  { path: '**', pathMatch:'full', loadChildren: () => import('./pages/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



