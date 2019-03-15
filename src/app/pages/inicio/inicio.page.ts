import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';
// import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';



@Component({
  selector: "app-inicio",
  templateUrl: "inicio.page.html",
  styleUrls: ["inicio.page.scss"]
})
export class InicioPage implements OnInit {
  moteles: Moteles[] = [];
  index: number;
  usuario: Usuario;

  constructor(
    private motelesService: MotelService,
    private navCtrl: NavController,
    // private activatedRoute: ActivatedRoute,
    private localStorage: LocalstorageService
  ) {
    this.moteles = this.motelesService.moteles;
    this.usuario = this.localStorage.cargarUltimoLogueo()[0];
  }

  ngOnInit() {}

  mostrarDetalle(indexMotel: number) {
    this.navCtrl.navigateBack("/detalles-moteles/" + indexMotel);
  }

  salir(){
    this.navCtrl.navigateBack("/login");
    this.localStorage.cargarUltimoLogueo().pop();
    this.localStorage.guardarUltimoLogueo();
  }
}
