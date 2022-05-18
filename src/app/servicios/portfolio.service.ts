import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estudios } from "../data/estudios";
import { map } from "rxjs";
import { config } from "../data/config/config";

@Injectable ({
    providedIn: 'root'
})
export class PortfolioService{

    constructor(private http: HttpClient) {}

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