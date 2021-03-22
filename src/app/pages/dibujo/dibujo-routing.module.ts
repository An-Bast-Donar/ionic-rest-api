import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DibujoPage } from './dibujo.page';

const routes: Routes = [
  {
    path: '',
    component: DibujoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DibujoPageRoutingModule {}
