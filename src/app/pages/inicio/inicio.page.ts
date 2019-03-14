import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage implements OnInit {

  moteles: Moteles[] = [];
  index: number;
  usuario: any;
  usuarioYmotel: any[];

  constructor(private motelesService: MotelService, 
    private navCtrl: NavController, 
    private activatedRoute: ActivatedRoute, 
    private userServices: UsuarioService) {
    this.moteles = motelesService.moteles;

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
