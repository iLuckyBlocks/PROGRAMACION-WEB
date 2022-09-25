import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Arrendamiento } from '../model/arrendamiento';


@Injectable({
  providedIn: 'root'
})
export class ArrendamientoService {
  private url:string = `${environment.host}`;
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Arrendamiento[]>(this.url);

}
