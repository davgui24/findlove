import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moteles, MotelService } from 'src/app/service/motel/motel.service';

@Component({
  selector: 'app-detalles-moteles',
  templateUrl: './detalles-moteles.page.html',
  styleUrls: ['./detalles-moteles.page.scss'],
})
export class DetallesMotelesPage implements OnInit {
  index: number;

  constructor(private activatedRoute: ActivatedRoute, private motelesService: MotelService ) {
    this.index = Number(this.activatedRoute.snapshot.paramMap.get('index'));
   }

  ngOnInit() {
  }

}
