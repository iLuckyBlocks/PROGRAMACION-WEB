import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alojamiento } from '../interfaces/alojamiento';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarAlojamientoService {

  constructor(private http:HttpClient) { }

}
