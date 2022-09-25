import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ListaArrendadores } from 'src/app/interfaces/listaArrendamiento';
import { MenuAdmin } from 'src/app/interfaces/menuAdmin';
import { MenuAdministradorService } from 'src/app/service/menu-administrador.service';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista-arrendadores',
  templateUrl: './lista-arrendadores.component.html',
  styleUrls: ['./lista-arrendadores.component.css']
})
export class ListaArrendadoresComponent implements OnInit {

  listaArrendadores: ListaArrendadores[]=[];
  displayedColumns: string[] = ['id', 'name', 'correo', 'phone', 'UserName', 'acciones'];
  dataSource!: MatTableDataSource<any>

  constructor(private _arrendadorService: ListaArrendadoresService) { }

  ngOnInit(): void {
    this.getAllArrendadores(); 
  }

    //Paginacion
    @ViewChild(MatPaginator) paginator!:MatPaginator;
    @ViewChild(MatSort) sort!:MatSort

    ngAfterViewInit(){
      this.dataSource.paginator=this.paginator;
    }
  
    getAllArrendadores(){
      this._arrendadorService.getArrendador()
      .subscribe({
        next:(res)=>{
          this.dataSource= new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        },
        error:(err)=>{
          alert("Ha ocurrido un error")
        }
      })
    }

    deleteArrendador(id:number){
      this._arrendadorService.deleteStudent(id)
      .subscribe({
        next:(res)=>{
          alert("Arrendador eliminado correctamente");
          this.getAllArrendadores();
        },
        error:()=>{
          alert("Error al eliminar")
        }
      })
    }

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
