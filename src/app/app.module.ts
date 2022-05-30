import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component'
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
 declarations: [AppComponent, ComponentesComponent, EstudiosComponent, ExperienciaComponent, 
    HabilidadesComponent, BarraNavegacionComponent, SobreComponent, ProyectosComponent,
        LoginComponent, PortfolioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [PortfolioService,
  {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
],

  bootstrap: [AppComponent]
})
export class AppModule { }
