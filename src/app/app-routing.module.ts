import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'favoritos',
    loadChildren: './pages/favoritos/favoritos.module#FavoritosPageModule'
  },
  {
    path: 'inicio',
    loadChildren: './pages/inicio/inicio.module#InicioPageModule'
  },
  { path: 'detalles-moteles/:index', loadChildren: './pages/detalles-moteles/detalles-moteles.module#DetallesMotelesPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
