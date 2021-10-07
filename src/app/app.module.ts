import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { RegisterComponent } from 'src/pages/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/services/users/User.service';
import { RouterModule } from '@angular/router';
import { MascotaAgregarComponent } from 'src/pages/mascotaAgregar/mascotaAgregar.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MascotaComponent } from 'src/pages/mascota/mascota.component';
import { MascotaMapaComponent } from 'src/pages/mascotaMapa/mascotaMapa.component';


@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    MainComponent,
    MascotaAgregarComponent,
    MascotaComponent,
    MascotaMapaComponent,
    RegisterComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
