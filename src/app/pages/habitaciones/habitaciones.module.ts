import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HabitacionesPage } from './habitaciones.page';
import { HabitacionConfigPage } from '../habitacion-config/habitacion-config.page';
import { HabitacionConfigPageModule } from '../habitacion-config/habitacion-config.module';

const routes: Routes = [
  {
    path: '',
    component: HabitacionesPage
  }
];

@NgModule({
  entryComponents:[HabitacionConfigPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionConfigPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HabitacionesPage]
})
export class HabitacionesPageModule {}
