import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ARHomePageRoutingModule } from './ar-home-routing.module';

import { ARHomePage } from './ar-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARHomePageRoutingModule
  ],
  declarations: [ARHomePage]
})
export class ARHomePageModule {}
