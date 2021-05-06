import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientInfoPageRoutingModule } from './client-info-routing.module';

import { ClientInfoPage } from './client-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientInfoPageRoutingModule
  ],
  declarations: [ClientInfoPage]
})
export class ClientInfoPageModule {}
