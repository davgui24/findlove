import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';
// import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';
//import { MenuComponent } from 'src/app/components/menu/menu.component';



@Component({
  selector: "app-inicio",
  templateUrl: "inicio.page.html",
  styleUrls: ["inicio.page.scss"]
})
export class InicioPage implements OnInit {
  moteles: Moteles[] = [];
  index: number;
  usuario: Usuario;
  //appPages = new MenuComponent().appPages;

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

  mostrarHabitaciones(){
    this.navCtrl.navigateBack('/habitaciones');
  }

  mostrarTarifas(){
    console.log('llama la vista tarifas');
  }

  mostrarReservas(){
    console.log('llama la vista reservas');
  }

  mostrarInforme(){
    console.log('llama la vista informe');
  }

  mostrarDetalle(indexMotel: number) {
    this.navCtrl.navigateBack("/detalles-moteles/" + indexMotel);
  }

  salir(){
    this.navCtrl.navigateBack("/login");
    this.localStorage.cargarUltimoLogueo().pop();
    this.localStorage.guardarUltimoLogueo();
  }
}
