import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-moteles',
  templateUrl: './detalles-moteles.page.html',
  styleUrls: ['./detalles-moteles.page.scss'],
})
export class DetallesMotelesPage implements OnInit {
  usuarioYmotel: any[];
  usuarioYmotelString

  usuarioLogueado;
  indexMotel: number;

  constructor(private activatedRoute: ActivatedRoute, public motelesService: MotelService, private navCtrl: NavController ) {
    this.usuarioYmotelString = this.activatedRoute.snapshot.paramMap.get('usuarioYmotel');
    this.usuarioYmotel = JSON.parse(this.usuarioYmotelString);
    this.usuarioLogueado = this.usuarioYmotel[0];
    this.indexMotel = this.usuarioYmotel[1];
   }

  ngOnInit() {
  }


  atras(){
    this.usuarioLogueado = JSON.stringify(this.usuarioLogueado);
    this.navCtrl.navigateBack('/inicio/' + this.usuarioLogueado);
  }

}
