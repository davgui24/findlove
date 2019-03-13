import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  index: number;
  usuario: any;
  constructor(private activatedRoute: ActivatedRoute, private userServices: UsuarioService) { 
    // this.index = Number(this.activatedRoute.snapshot.paramMap.get('indexUser'));
    // this.userServices.getUsuarios().then(data => {
    //   this.usuario = Object(data)[this.index]
    //   console.log('Este es usuaio' + this.usuario);
    // })

    
  }

  ngOnInit() {
  }

}
