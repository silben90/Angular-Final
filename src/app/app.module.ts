import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { EstudiosRealizadosComponent } from './componentes/estudios-realizados/estudios-realizados.component'
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 declarations: [AppComponent, ComponentesComponent, EstudiosRealizadosComponent, ExperienciaComponent, 
    HabilidadesComponent, BarraNavegacionComponent, SobreMiComponent, ProyectosComponent,
        LoginComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
