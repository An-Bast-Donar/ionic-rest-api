import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalesPageRoutingModule } from './finales-routing.module';

import { FinalesPage } from './finales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalesPageRoutingModule
  ],
  declarations: [FinalesPage]
})
export class FinalesPageModule {}
