import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  usuario: Usuario;

  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'inicio'
    },
    {
      title: 'Favoritos',
      url: '/favoritos',
      icon: 'favoritos'
    },
  ];
  constructor(private localStorage: LocalstorageService) {
    
    this.usuario = this.localStorage.cargarUltimoLogueo()[0];
   }

  ngOnInit() {}

}
