import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ArrendamientoService {
  private url:string = `${environment.host}`;
  constructor(private http:HttpClient) { }

 

}
