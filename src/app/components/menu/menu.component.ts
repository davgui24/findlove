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
  avt: any;

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

switch (this.usuario.avatar) {

  case 'av-1.png' :
    this.avt = 'assets/avatars/av-1.png';
    break;

  case 'av-2.png' :
  this.avt = 'assets/avatars/av-2.png';
    break;

  case 'av-3.png' :
  this.avt = 'assets/avatars/av-3.png';
    break;

  case 'av-4.png' :
  this.avt = 'assets/avatars/av-4.png';
    break;

  case 'av-5.png' :
  this.avt = 'assets/avatars/av-5.png';
    break;

  case 'av-6.png' :
  this.avt = 'assets/avatars/av-6.png';
    break;

  case 'av-7.png' :
  this.avt = 'assets/avatars/av-7.png';
    break;

  case 'av-8.png' :
  this.avt = 'assets/avatars/av-8.png';
    break;
  }
  
}
 
  ngOnInit() {}

}
