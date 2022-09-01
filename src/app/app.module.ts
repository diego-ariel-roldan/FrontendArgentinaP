import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderlogoComponent } from './header/componente-header/headerlogo/headerlogo.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { MiexperienciaComponent } from './miexperiencia/miexperiencia.component';
import { MieducacionComponent } from './mieducacion/mieducacion.component';
import{ NgCircleProgressModule}from 'ng-circle-progress';
import { PorcentajeComponent } from './porcentaje/porcentaje.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderlogoComponent,
    BannerComponent,
    AcercaDeComponent,
    MiexperienciaComponent,
    MieducacionComponent,
    PorcentajeComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
