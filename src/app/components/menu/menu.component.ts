import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'inicio'
    },
    {
      title: 'Favoritos',
      url: '/favoritos',
      icon: 'favoritos'
    },
  ];
  constructor() { }

  ngOnInit() {}

}
