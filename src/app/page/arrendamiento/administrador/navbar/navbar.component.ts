import { Component, OnInit } from '@angular/core';
import { MenuAdmin } from 'src/app/interfaces/menuAdmin';
import { MenuAdministradorService } from 'src/app/service/menu-administrador.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: MenuAdmin[]=[];
  constructor(private _menuService: MenuAdministradorService) { }

  ngOnInit(): void {
    this.cargarMenuUsuarios();
  }

  cargarMenuUsuarios(){
    this._menuService.getMenuAdmin().subscribe(data1 =>{
      this.menu=data1;
    })
  }

}
