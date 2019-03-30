import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habitacion-config',
  templateUrl: './habitacion-config.page.html',
  styleUrls: ['./habitacion-config.page.scss'],
})
export class HabitacionConfigPage implements OnInit {

  @Input() nombre;

  select: any = [{
    nombre: 'DIsponible',
    color: 'success'
  }, {
    nombre: 'Pendiente',
    color: 'warning'
  }, {
    nombre: 'Ocupada',
    color: 'danger'
  }
];

  constructor(private modalCtrl: ModalController) {

   }

  ngOnInit() {
  }

  radioSel(color: any) {
    this.modalCtrl.dismiss({
      color, nombre: this.nombre
    });
  }
}
