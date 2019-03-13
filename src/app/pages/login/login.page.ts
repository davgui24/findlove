import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild ('slidePrincipal') slides: IonSlides;

  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor(public navCtrl: NavController, private userServices: UsuarioService) {
   }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  login(fLogin: NgForm) {
    this.userServices.getUsuarios().then(data => {
      for (let i = 0; i < Object(data).length; i++){
        if (fLogin.value.email == Object(data)[i].email && fLogin.value.password == Object(data)[i].password ){
          this.navCtrl.navigateBack('/inicio/' + i);
          return;
        }else{
          console.log('No esta logueado');
        }
      }
    })

  }

  registro(fRegistro: NgForm) {
    let user = {
      email: fRegistro.value.email,
      nombre: fRegistro.value.nombre,
      password: fRegistro.value.password
    }
 
    this.userServices.crearUsuario(user);
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

  loginUser() {
    
  }



  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

}
