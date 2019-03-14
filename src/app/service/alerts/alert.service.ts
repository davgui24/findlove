import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl: AlertController) { }


async presentAlert(mensaje: string) {
  const alert = await this.alertCtrl.create({
    header: 'Alerta',
    subHeader: '',
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
}
}
