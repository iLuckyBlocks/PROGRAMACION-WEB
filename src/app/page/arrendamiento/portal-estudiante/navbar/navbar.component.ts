import { Component, OnInit } from '@angular/core';
import { MenuEstudiante } from 'src/app/interfaces/menuEstudiante';
import { MenuEstudianteService } from 'src/app/service/menu-estudiante.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: MenuEstudiante[]=[];
  constructor(private _menuService: MenuEstudianteService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenuEstudiante().subscribe(data1 => {
      console.log(data1);
      this.menu=data1;
    })
  }
}
