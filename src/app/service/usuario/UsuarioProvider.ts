import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
@Injectable()
export class UsuarioProvider {
  clave: string;
  user: any;
  private doc: Subscription;
  constructor(public afDB: AngularFirestore, private platfom: Platform, private storage: Storage) {
  }
  verificaUsuario(pass: string) {
    return new Promise((resolve, reject) => {
      this.doc = this.afDB.doc(`/usuarios/${pass}`)
        .valueChanges().subscribe(date => {
          if (date) {
            this.clave = pass;
            this.user = date;
            this.guardarStorage();
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }
  guardarStorage() {
    if (this.platfom.is('cordova')) {
      // celular
      this.storage.set('pass', this.clave);
    } else {
      // escritorio
      localStorage.setItem('pass', this.clave);
    }
  }
  cargarStorage() {
    return new Promise((resolve, reject) => {
      if (this.platfom.is('cordova')) {
        // celular
        this.storage.get('pass').then((val) => {
          if (val) {
            this.clave = val;
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else {
        // escritorio
        if (localStorage.getItem('pass')) {
          this.clave = localStorage.getItem('pass');
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  }
  borrarUsuario() {
    this.clave = null;
    if (this.platfom.is('cordova')) {
      this.storage.remove('pass');
    } else {
      localStorage.removeItem('pass');
    }
    this.doc.unsubscribe();
  }
}
