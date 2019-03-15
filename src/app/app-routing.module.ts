import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocalstorageService } from "./service/localstorage/localstorage.service";
// import { LocalstorageService } from './service/localstorage/localstorage.service';

// const routes: Routes = new Pages().routes;

 const routes: Routes = [
  {
    path: "",
    // redirectTo: "inicio",
     redirectTo: (new LocalstorageService().cargarUltimoLogueo().length == 0 || new LocalstorageService().cargarUltimoLogueo()[0] == undefined) ? "login" : "inicio",
    pathMatch: "full"
  },
  {
    path: "favoritos",
    loadChildren: "./pages/favoritos/favoritos.module#FavoritosPageModule"
  },
  {
    path: "inicio",
    loadChildren: "./pages/inicio/inicio.module#InicioPageModule"
  },
  {
    path: "detalles-moteles/:indexMotel",
    loadChildren:
      "./pages/detalles-moteles/detalles-moteles.module#DetallesMotelesPageModule"
  },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: "home", loadChildren: "./pages/home/home.module#HomePageModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
