import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DibujoPageRoutingModule } from './dibujo-routing.module';

import { DibujoPage } from './dibujo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DibujoPageRoutingModule
  ],
  declarations: [DibujoPage]
})
export class DibujoPageModule {}
