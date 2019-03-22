import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-habitaciones",
  templateUrl: "./habitaciones.page.html",
  styleUrls: ["./habitaciones.page.scss"]
})
export class HabitacionesPage implements OnInit {
  habita: Array<object> = [];

  constructor(public navCtrl: NavController) {
    this.habita = [
      { name: "h101", state: "1" },
      { name: "h102", state: "2" },
      { name: "h103", state: "1" },
      { name: "h104", state: "3" },
      { name: "h105", state: "1" },
      { name: "h106", state: "2" },
      { name: "h107", state: "1" },
      { name: "h108", state: "3" },
      { name: "h109", state: "1" },
      { name: "h110", state: "2" },
      { name: "h111", state: "1" },
      { name: "h112", state: "2" }
    ];
  }

  ngOnInit() {}

  atras() {
    this.navCtrl.navigateBack("/inicio");
  }
}
