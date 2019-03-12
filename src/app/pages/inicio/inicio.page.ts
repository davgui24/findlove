import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage implements OnInit {

  moteles: Moteles[] = [];

  constructor(private motelesService: MotelService, private navCtrl: NavController) {
    this.moteles = motelesService.moteles;
  }

  ngOnInit() {
  }

  mostrarDetalle(index: number) {
   this.navCtrl.navigateBack('/detalles-moteles/' + index);
  }

}
