import { Component, OnInit } from '@angular/core';
import { Moteles, MotelService } from '../service/motel/motel.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  moteles: Moteles[] = [];

  constructor(private motelesService: MotelService) {
    this.moteles = motelesService.moteles;
  }

  ngOnInit() {
  }

  mostrarDetalle(index: number) {
    console.log('Este es el motel #' + (index + 1));
  }

}
