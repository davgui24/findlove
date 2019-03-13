import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  pass: string;
  pass2: any;

  constructor(public navCtrl: NavController, private userServices: UsuarioService) {
   }

  @ViewChild ('slidePrincipal') slides: IonSlides;

  avatarSlide = {
    slidesPerView: 3.5
  };

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
        if (fLogin.value.email == Object(data)[i].email){

            this.pass2 = Object(data)[i].password;
            this.pass = fLogin.value.password;
            bcrypt.hashSync (this.pass, 10);

            if (bcrypt.compareSync(this.pass, this.pass2)){
              this.navCtrl.navigateBack('/inicio/' + i);
              return;
            }
        } else {
          console.log('No esta logueado');
        }
      }
    })

  }

  registro(fRegistro: NgForm) {
    let user = {
      email: fRegistro.value.email,
      nombre: fRegistro.value.nombre,
      password: bcrypt.hashSync(fRegistro.value.password, 10)
    }

    this.userServices.getUsuarios().then(data => {
         if(data){
           let encontrado: boolean = false;
           Object(data).forEach(element => {
             if (user.email ==  element.email){
                   encontrado = true;
             }
           });

           if(!encontrado){
             this.userServices.crearUsuario(user);
             this.slides.lockSwipes(false);
             this.slides.slideTo(0);
             this.slides.lockSwipes(true);
             return;
           }else{
             console.log('Este usuario ya existe');
           }
         }else{
           console.log('Falló la búsqueda');
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

}
