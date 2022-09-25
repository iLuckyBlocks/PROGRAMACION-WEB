import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import { Estudiantes } from '../model/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  constructor(private http:HttpClient) { }

  postEstudiante(data: any){
    return this.http.post<any>("http://localhost:3000/Estudiantes/", data);
  }
   
  getEstudiante(){
    return this.http.get<any>("http://localhost:3000/Estudiantes/");
  }
  

  putStudent(data: any , id: number){
    return this.http.put<any>("http://localhost:3000/Estudiantes/"+id, data);
  }

  delectStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/Estudiantes/" +id);
  }


}
