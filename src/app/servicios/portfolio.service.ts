import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estudios } from "../data/estudios";
import {Experiencia} from "../data/experiencia";
import { map } from "rxjs";
import { config } from "../data/config/config";

@Injectable ({
    providedIn: 'root'
})

export class PortfolioService{

    url:string="http:localhost:8080"
        
    obtenerDatosDeInicio: any;
  
      constructor(private http: HttpClient) {}
  
  

    obtenerDatosExperiencia(): Observable<Experiencia[]> {
        return this.http.get<any>(config.baseUrl + "experiencia");
    }

  borrarExperiencia(id: number) {
    return this.http.delete<any>(config.baseUrl + "experiencia/" + id);
  }
  modificarExperiencia(experiencia: Experiencia) {
    return this.http.put<any>(config.baseUrl + "experiencia/update", experiencia);
  }
  guardarNuevaExperiencia(experiencia: Experiencia) {
    return this.http.post<any>(config.baseUrl + "experiencia/create", experiencia);
  }


    obtenerDatosEstudios(): Observable<Estudios[]> {
        return this.http.get<any>(config.baseUrl + "estudios");
    }

    guardarNuevosEstudios(estudios:Estudios): Observable<Estudios> {
        return this.http.post<any>(config.baseUrl + "estudios/create", estudios);
    }

    modificarEstudios(estudios: Estudios): Observable<any> {
        return this.http.put<any>(config.baseUrl + "estudios/update", estudios);
    }

    borrarEstudios(id: number): Observable<any> {
        return this.http.delete<any>(config.baseUrl + "estudios/" + id);
    }


}