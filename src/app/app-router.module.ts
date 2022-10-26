import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './sellings/pages/basics/basics.component';
import { NoCommonComponent } from './sellings/pages/no-common/no-common.component';
import { NumbersComponent } from './sellings/pages/numbers/numbers.component';
import { OrderComponent } from './sellings/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'no-common',
    component: NoCommonComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },{
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
