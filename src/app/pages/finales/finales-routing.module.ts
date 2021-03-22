import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalesPage } from './finales.page';

const routes: Routes = [
  {
    path: '',
    component: FinalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalesPageRoutingModule {}
