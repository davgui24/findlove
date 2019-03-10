import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage implements OnInit {

  moteles: Moteles[] = [];

  constructor(private motelesService: MotelService) {
    this.moteles = motelesService.moteles;
  }

  ngOnInit() {
  }

  mostrarDetalle(index: number) {
    console.log('Este es el motel #' + index);
  }

}
