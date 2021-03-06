import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { MascotaComponent } from 'src/pages/mascota/mascota.component';
import { MascotaAgregarComponent } from 'src/pages/mascotaAgregar/mascotaAgregar.component';
import { MascotaMapaComponent } from 'src/pages/mascotaMapa/mascotaMapa.component';
import { RegisterComponent } from 'src/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'principal',
    component: MainComponent
  },
  {
    path: 'agregar_mascota',
    component: MascotaAgregarComponent
  },
  {
    path: 'mascota',
    component: MascotaComponent
  },
  {
    path: 'mascota_mapa',
    component: MascotaMapaComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
