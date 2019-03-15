import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { Usuario } from 'src/app/modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  items: Observable<any[]>;
  constructor(private afDB: AngularFireDatabase) { }
  
  crearUsuario(usuario: Usuario) {
    const res = usuario.user.split(".");
    this.afDB.database.ref('/usuarios/' + res[0] + new Date().getTime()).set(usuario);
  }

  getUsuarios() {
    return new Promise((resolve, reject) => {
      this.afDB.list('/usuarios/').valueChanges().subscribe(data => {
        if (data) {
          resolve(data);
        } else {
          reject('no salió')
        }
      });
    });
  }

}


