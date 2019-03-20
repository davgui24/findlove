import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotelService } from 'src/app/service/motel/motel.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-moteles',
  templateUrl: './detalles-moteles.page.html',
  styleUrls: ['./detalles-moteles.page.scss'],
})
export class DetallesMotelesPage implements OnInit {
 
  indexMotel: number;

  constructor(private activatedRoute: ActivatedRoute, public motelesService: MotelService, private navCtrl: NavController ) {
    this.indexMotel = Number(this.activatedRoute.snapshot.paramMap.get("indexMotel"));
    console.log(this.indexMotel);
   }

  ngOnInit() {
  }


  atras(){
    this.navCtrl.navigateBack('/inicio');
  }

}
