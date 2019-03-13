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

  constructor(private motelesService: MotelService, 
    private navCtrl: NavController, 
    private activatedRoute: ActivatedRoute, 
    private userServices: UsuarioService) {
    this.moteles = motelesService.moteles;

    this.index = Number(this.activatedRoute.snapshot.paramMap.get('indexUser'));
    this.userServices.getUsuarios().then(data => {
      this.usuario = Object(data)[this.index]
      console.log('Este es usuaio', this.usuario);
     })
   };

  ngOnInit() {
  }

  mostrarDetalle(index: number) {
   this.navCtrl.navigateBack('/detalles-moteles/');
  }

}
