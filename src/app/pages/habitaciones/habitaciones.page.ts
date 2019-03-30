import { NavController, ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { HabitacionConfigPage } from '../habitacion-config/habitacion-config.page';
// import { HabitacionConfigPage } from '../habitacion-config/habitacion-config.page';

@Component({
  selector: "app-habitaciones",
  templateUrl: "./habitaciones.page.html",
  styleUrls: ["./habitaciones.page.scss"]
})
export class HabitacionesPage implements OnInit {

  habita: Array<object> = [];
  nombre: string;
  color: string;
  colo2: any;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController) {

    this.habita = [
      { name: 'h101', state: '1'},
      { name: 'h102', state: '1'},
      { name: 'h103', state: '1'},
      { name: 'h104', state: '1'},
      { name: 'h105', state: '1'},
      { name: 'h106', state: '1'},
      { name: 'h107', state: '1'},
      { name: 'h108', state: '1'},
      { name: 'h109', state: '1'},
      { name: 'h110', state: '1'},
      { name: 'h111', state: '1'},
      { name: 'h112', state: '1'}
    ];
  }

  ngOnInit() {}

  atras() {
    this.navCtrl.navigateBack('/inicio');
  }

  async habitacion(habita) {

    this.nombre = habita.name;


   const modal = await this.modalCtrl.create({
      component: HabitacionConfigPage,
      componentProps: {
        nombre: this.nombre
      }
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log(data);
    this.colo2 = data;


    switch (this.colo2.color) {
        case 'success':
        habita.state = '1';
        break;

        case 'warning':
        habita.state = '2';
        break;

        case 'danger':
        habita.state = '3';
        break;
    }
  }
}
