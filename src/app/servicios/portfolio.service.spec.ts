import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EstudiosComponent } from "../componentes/estudios/estudios.component";
import { map } from "rxjs";
import { config } from "process";

@Injectable ({
    providedIn: 'root'
})
export class PortfolioService{

    constructor(private http: HttpClient) {}

    obtenerDatosEstudios(): Observable<Estudios[]> {
        return this.http.get<any>(config.baseUrl + "estudios");
    }

    guardarNuevosEstudios(): Observable<Estudios> {
        return.this.http.post<any>(config.baseUrl + "estudios/create", estudios);
    }

    modificarEstudios(estudios: Estudios): Observable<any> {
        return.this.http.put<any>(config.baseUrl + "estudios/update", estudios);
    }


}