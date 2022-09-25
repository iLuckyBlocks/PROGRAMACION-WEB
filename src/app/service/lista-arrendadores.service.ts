import { Injectable } from '@angular/core';
import { ListaArrendadores } from '../interfaces/listaArrendamiento';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'
import { Arrendador } from '../model/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ListaArrendadoresService {

  constructor(private http:HttpClient) { }

  postArrendador(data:any){
    return this.http.post<any>("http://localhost:3000/Arrendadores/", data);
  }

  getArrendador(){
    return this.http.get<any>("http://localhost:3000/Arrendadores/");
   }
  

   putStudent(data:any , id:number){
    return this.http.put<any>("http://localhost:3000/Arrendadores/"+id,data);
   }

   deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/Arrendadores/"+id);
   }

}
