import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

// import * as bcrypt from 'bcryptjs';
import { AlertService } from 'src/app/service/alerts/alert.service';
import { Usuario } from 'src/app/modelos/usuario';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';


@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  pass: string;
  pass2: any;
  avatar: any;

  constructor(
    public navCtrl: NavController,
    private userServices: UsuarioService,
    public alertCtrl: AlertService,
    public localStorageService: LocalstorageService) {
    this.localStorageService.cargarUltimoLogueo();
    }

  @ViewChild("slidePrincipal") slides: IonSlides;

  avatarSlide = {
    slidesPerView: 3.5
  };

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  seleccionarAvatar(avatar) {
    if (!avatar) {
      this.avatar = {
        img: "av-1.png",
        seleccionado: true
      };
    } else {
      this.avatar = avatar;
      this.avatars.forEach(av => (av.seleccionado = false));
      avatar.seleccionado = true;
    }
    return this.avatar;
  }


  logeado: boolean;
  login(fLogin: NgForm) {
    this.userServices.getUsuarios().then(data => {
      this.logeado = false;
      for (let i = 0; i < Object(data).length; i++) {
        this.usuario = Object(data)[i];
        if (
          fLogin.value.email == this.usuario.user &&
          fLogin.value.password == this.usuario.pass) {
          this.usuario = Object(data)[i];
          this.localStorageService.cargarUltimoLogueo()[0] = this.usuario;
          this.localStorageService.guardarUltimoLogueo();
          this.logeado = true;
        } else {
          console.log("No esta logueado");
          console.log(fLogin.value.email);
          console.log(this.usuario.user);
          console.log(fLogin.value.password);
          console.log(this.usuario.pass);
          console.log(Object(data).length);
        }
      }
      if (!this.logeado) {
        console.log('es', this.logeado);
        this.alertCtrl.presentAlert("Verifique usuario y/o contraseña");
      }else{
        console.log('es', this.logeado);
        this.navCtrl.navigateBack("/inicio/" + this.usuario);
        return;
      }
    });
  }



  registro(fRegistro: NgForm) {
    this.seleccionarAvatar(this.avatar);

    if (!this.seleccionarAvatar(this.avatar).seleccionado) {
      this.usuario = new Usuario(
        fRegistro.value.nombre,
        fRegistro.value.email,
        fRegistro.value.password,
        ""
      );
    } else {
      this.usuario = new Usuario(
        fRegistro.value.nombre,
        fRegistro.value.email,
        fRegistro.value.password,
        this.avatar.img
      );
    }

    this.userServices.getUsuarios().then(data => {
      if (data) {
        let encontrado: boolean = false;
        if (
          this.usuario.user == "" ||
          this.usuario.nombre == "" ||
          this.usuario.pass == ""
        ) {
          this.alertCtrl.presentAlert("No debe haber campos vacíos");
          return;
        } else {
          Object(data).forEach(element => {
            if (this.usuario.user == element.email) {
              encontrado = true;
            }
          });
        }

        if (!encontrado) {
          this.userServices.crearUsuario(this.usuario);
          this.alertCtrl.presentAlert("El uausrio fue registrado exitósamente");
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
          return;
        } else {
          this.alertCtrl.presentAlert("Este usuario ya existe");
          console.log("Este usuario ya existe");
        }
      } else {
        this.alertCtrl.presentAlert("Falló la búsqueda");
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
