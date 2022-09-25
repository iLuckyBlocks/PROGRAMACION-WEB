import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginArrendamientoComponent } from '../login-arrendamiento/login-arrendamiento.component';

@Component({
  selector: 'app-arrendamiento-listar',
  templateUrl: './arrendamiento-listar.component.html',
  styleUrls: ['./arrendamiento-listar.component.css']
})
export class ArrendamientoListarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  LlamarRegistro(){
    //ruteo, llama al login despues de presionar click
    this.router.navigate(['login']);
  }
}
