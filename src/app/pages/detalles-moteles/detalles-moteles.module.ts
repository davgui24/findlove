import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesMotelesPage } from './detalles-moteles.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesMotelesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesMotelesPage]
})
export class DetallesMotelesPageModule {}
