import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { MenuAdmin } from '../interfaces/menuAdmin';

@Injectable({
  providedIn: 'root'
})
export class MenuAdministradorService {

  listaEstaticaUsuarios: MenuAdmin[]=[

  ];

  constructor(private http:HttpClient) { }

  getMenuAdmin():Observable<MenuAdmin[]>{
    return this.http.get<MenuAdmin[]>('./assets/data1/menuAdmin.json');
  }

}
