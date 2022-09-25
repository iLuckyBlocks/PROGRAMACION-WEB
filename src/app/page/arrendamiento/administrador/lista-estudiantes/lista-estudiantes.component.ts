import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListaEstudiantes } from 'src/app/interfaces/listaEstudiantes';
import { MenuAdmin } from 'src/app/interfaces/menuAdmin';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { MenuAdministradorService } from 'src/app/service/menu-administrador.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
  
  listaEstudiantes: ListaEstudiantes[]=[];
  displayedColumns: string[] = ['id', 'name', 'correo', 'phone', 'UserName', 'acciones'];
  dataSource!: MatTableDataSource<any>

  constructor(private _estudiante:ListaEstudiantesService) { }

  ngOnInit(): void { 
    this.getAllEstudents();
  }

   //Paginacion
   @ViewChild(MatPaginator) paginator!:MatPaginator;
   @ViewChild(MatSort) sort!:MatSort

   ngAfterViewInit(){
     this.dataSource.paginator=this.paginator;
   }

    //en lista de estudiantes
  getAllEstudents(){
  this._estudiante.getEstudiante()
  .subscribe({
    next:(res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      alert("Ha ocurrido un error")
    }
  })
  }


  delectEstudiante(id:number){
    this._estudiante.delectStudent(id)
    .subscribe({
      next:(res)=>{
        alert("Estudiante eliminado correctamente");
        this.getAllEstudents();
      },
      error:()=>{
        alert("Error en eliminar")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
