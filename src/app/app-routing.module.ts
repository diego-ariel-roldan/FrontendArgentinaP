import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditExperienciaComponent } from './miexperiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './miexperiencia/new-experiencia.component';
import { LoginComponent } from './login/login.component';
import { EditeducacionComponent } from './mieducacion/editeducacion.component';
import { NeweducacionComponent } from './mieducacion/neweducacion.component';

import { NewSkillComponent } from './porcentaje/new-skill.component';
import { EditskillComponent } from './porcentaje/editskill.component';


const routes: Routes = [
{ path:'', component: HomeComponent  },
{ path:'login', component: LoginComponent },
{path:'nuevaexp',component:NewExperienciaComponent},
{path:'editext/:id',component:EditExperienciaComponent},
{ path:'nuevaedu', component:NeweducacionComponent},
{ path: 'editedu/:id', component:EditeducacionComponent},
{ path: 'newskill', component:NewSkillComponent},
{ path: 'editskill/:id', component:EditskillComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
