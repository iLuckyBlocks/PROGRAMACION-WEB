import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { MenuEstudiante } from '../interfaces/menuEstudiante';
@Injectable({
  providedIn: 'root'
})
export class MenuEstudianteService {

  constructor(private http:HttpClient) {}
  
    getMenuEstudiante():Observable<MenuEstudiante[]>{
      return this.http.get<MenuEstudiante[]>('./assets/data1/menuEstudiante.json');
    }
}
