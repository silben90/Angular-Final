import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { EstudiosRealizadosComponent } from './Componentes/estudios-realizados/estudios-realizados.component'
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { BarraNavegacionComponent } from './Componentes/barra-navegacion/barra-navegacion.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    EstudiosRealizadosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    BarraNavegacionComponent,
    SobreMiComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
