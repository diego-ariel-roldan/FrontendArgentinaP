import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditExperienciaComponent } from './miexperiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './miexperiencia/new-experiencia.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{ path:'', component: HomeComponent  },
{ path:'login', component: LoginComponent },
{path:'nuevaexp',component:NewExperienciaComponent},
{path:'editext/:id',component:EditExperienciaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
