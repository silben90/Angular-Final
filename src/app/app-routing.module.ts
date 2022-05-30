import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SobreComponent} from './componentes/sobre/sobre.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

const routes: Routes= [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'home', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'estudios', component: EstudiosComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path:'', redirectTo: 'portfolio', pathMatch:'full'},
];



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule]
})
export class AppRoutingModule { 
  form:FormGroup;
  constructor(private formbuilder:FormBuilder){
    this.form=this.formbuilder.group(
      {
        email:['',[Validators.required, Validators.email ]],
        password:['', [Validators.required, Validators.minLength(6)]],

      }
    )
  }
  }

