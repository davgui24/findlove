import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';



@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage implements OnInit {

  moteles: Moteles[] = [];
  index: number;
  usuario: Usuario;
  usuarioYmotel: any[];

  constructor(private motelesService: MotelService, 
    private navCtrl: NavController, 
    private activatedRoute: ActivatedRoute) {
    this.moteles = this.motelesService.moteles;

    this.usuario = JSON.parse(this.activatedRoute.snapshot.paramMap.get('usuarioLogueado'));
    console.log('El usaer es ', (this.usuario));
   };

  ngOnInit() {
  }

  mostrarDetalle(index: number) {
    this.usuarioYmotel = [this.usuario, index];
    let usuarioYmotelString = JSON.stringify(this.usuarioYmotel)
    this.navCtrl.navigateBack('/detalles-moteles/' + usuarioYmotelString);
  }

}
