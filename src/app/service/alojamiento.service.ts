import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alojamiento } from '../interfaces/alojamiento';
import { NuevoAlojamiento } from '../model/NuevoAlojamiento';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  private listaCambio= new Subject<NuevoAlojamiento[]>()

  constructor(private http:HttpClient) { }

  
  postProduct(data: any){
    return this.http.post<any>("http://localhost:3000/Alojamientos/", data);
  }

  getAlojamiento(){
    return this.http.get<any>("http://localhost:3000/Alojamientos/");
  }

  putAlojamiento(data:any , id:number){
    return this.http.put<any>("http://localhost:3000/Alojamientos/"+id,data)
  }

  deleteAlojamiento(id:number){
      return this.http.delete<any>("http://localhost:3000/Alojamientos/"+id);
  }
  
}
