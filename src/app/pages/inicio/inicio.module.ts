import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: InicioPage
      }
    ])
  ],
  declarations: [InicioPage, MenuComponent]
})
export class InicioPageModule {}
