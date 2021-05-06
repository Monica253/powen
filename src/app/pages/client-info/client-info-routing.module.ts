import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientInfoPage } from './client-info.page';

const routes: Routes = [
  {
    path: '',
    component: ClientInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientInfoPageRoutingModule {}
