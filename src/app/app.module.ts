import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
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
import{ HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewExperienciaComponent } from './miexperiencia/new-experiencia.component';
import { EditExperienciaComponent } from './miexperiencia/edit-experiencia.component';
import { NeweducacionComponent } from './mieducacion/neweducacion.component';
import { EditeducacionComponent } from './mieducacion/editeducacion.component';
import { NewSkillComponent } from './porcentaje/new-skill.component';
import { EditskillComponent } from './porcentaje/editskill.component';
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
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewSkillComponent,
    EditskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
