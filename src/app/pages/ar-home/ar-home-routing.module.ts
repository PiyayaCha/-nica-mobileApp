import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ARHomePage } from './ar-home.page';

const routes: Routes = [
  {
    path: '',
    component: ARHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ARHomePageRoutingModule {}
