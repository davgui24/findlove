import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

import * as bcrypt from 'bcryptjs';


@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  pass: string;
  pass2: any;
  avatar: any;

  constructor(
    public navCtrl: NavController,
    private userServices: UsuarioService
  ) {}

  @ViewChild("slidePrincipal") slides: IonSlides;

  avatarSlide = {
    slidesPerView: 3.5
  };

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  seleccionarAvatar(avatar) {
    if(!avatar){
      this.avatar = {
        img: "av-1.png",
        seleccionado: true
      }
    }else{
      this.avatar = avatar;
      this.avatars.forEach(av => (av.seleccionado = false));
      avatar.seleccionado = true;
    }
    return this.avatar;
  }

  login(fLogin: NgForm) {
    this.userServices.getUsuarios().then(data => {
      for (let i = 0; i < Object(data).length; i++) {
        if (
          fLogin.value.email == Object(data)[i].email &&
          fLogin.value.password == Object(data)[i].password
        ) {
          let usuario = JSON.stringify(Object(data)[i]);
          this.navCtrl.navigateBack("/inicio/" + usuario);
          return;

          // LA PARTE DE LA ENCRIPTACION LA HACEMOS DESPUES
          // =====================================================================
          //             this.pass2 = Object(data)[i].password;
          //             this.pass = fLogin.value.password;
          //             bcrypt.hashSync (this.pass, 10);

          //             if (bcrypt.compareSync(this.pass, this.pass2)){
          //               this.navCtrl.navigateBack('/inicio/' + Object(data)[i]);
          //               return;
          //             }
          // =====================================================================
        } else {
          console.log("No esta logueado");
        }
      }
    });
  }

  registro(fRegistro: NgForm) {
    this.seleccionarAvatar(this.avatar);
    let user;
    if (!this.seleccionarAvatar(this.avatar).seleccionado) {
      user = {
        email: fRegistro.value.email,
        nombre: fRegistro.value.nombre,
        password: bcrypt.hashSync(fRegistro.value.password, 10),
        avatar: ''
      };
    } else {
      user = {
        email: fRegistro.value.email,
        nombre: fRegistro.value.nombre,
        password: fRegistro.value.password,
        // password: bcrypt.hashSync(fRegistro.value.password, 10),
        avatar: this.avatar.img
      };
    }
      

    this.userServices.getUsuarios().then(data => {
      if (data) {
        let encontrado: boolean = false;
        if (user.email == "" || user.password == "" || user.nombre == '') {
          console.log("No debe haber campos vacíos");
          return;
        }else{
          Object(data).forEach(element => {
            if (user.email == element.email) {
              encontrado = true;
            }
          });
        }

        if (!encontrado) {
          this.userServices.crearUsuario(user);
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
          return;
        } else {
          console.log("Este usuario ya existe");
        }
      } else {
        console.log("Falló la búsqueda");
      }
    });
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  avatars = [
    {
      img: "av-1.png",
      seleccionado: true
    },
    {
      img: "av-2.png",
      seleccionado: false
    },
    {
      img: "av-3.png",
      seleccionado: false
    },
    {
      img: "av-4.png",
      seleccionado: false
    },
    {
      img: "av-5.png",
      seleccionado: false
    },
    {
      img: "av-6.png",
      seleccionado: false
    },
    {
      img: "av-7.png",
      seleccionado: false
    },
    {
      img: "av-8.png",
      seleccionado: false
    }
  ];
}
