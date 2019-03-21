import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.page.html',
  styleUrls: ['./habitaciones.page.scss'],
})
export class HabitacionesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  atras(){
    this.navCtrl.navigateBack('/inicio');
  }
}
