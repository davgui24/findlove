import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  ultimoLogueo: Usuario[] = [];
  constructor() { 
    this.cargarUltimoLogueo();
  }

  cargarUltimoLogueo() {
    if (localStorage.getItem("usuarioLogeado")) {
      this.ultimoLogueo = JSON.parse(localStorage.getItem("usuarioLogeado")
      );
    } else {
      this.ultimoLogueo = [];
    }
    return this.ultimoLogueo;
  }


  guardarUltimoLogueo() {
    localStorage.setItem("usuarioLogeado", JSON.stringify(this.ultimoLogueo));
  }

}
