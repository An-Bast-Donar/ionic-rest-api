import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DibujoPage } from '../pages/dibujo/dibujo.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dibujo',
    component: DibujoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
