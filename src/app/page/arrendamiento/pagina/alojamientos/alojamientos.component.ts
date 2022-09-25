import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Alojamiento } from 'src/app/interfaces/alojamiento';
import { AlojamientoService } from 'src/app/service/alojamiento.service';
import { NuevoAlojamiento } from 'src/app/model/NuevoAlojamiento';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import{MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrearAlojamientoComponent } from 'src/app/page/pagina/alojamientos/crear-alojamiento/crear-alojamiento.component';


@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'direccion', 'precio', 'descripcion','acciones'];
  dataSource!:MatTableDataSource<any>;

  constructor(private _AlojamientoService: AlojamientoService, private router:Router , private dialog: MatDialog, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.getAllAlojamientos();
  }

  //Paginacion
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
  }

  openDialog(){
    this.dialog.open(CrearAlojamientoComponent,{
      width:'60%'
    }).afterClosed().subscribe(val=>{
      if(val==='aceptar'){
        this.getAllAlojamientos();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarAlojamiento(index: number){
    this._AlojamientoService.deleteAlojamiento(index)
    .subscribe({
      next:(res)=>{
        alert("Alojamiento eliminado correctamente");
        this.getAllAlojamientos();
      },
      error:()=>{
        alert("Error al eliminar alojamiento")
      }
    })
  }
 
  getAllAlojamientos(){
    this._AlojamientoService.getAlojamiento()
    .subscribe({
      next:(res)=>{
          //aqui
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("Ha ocurrido un error al cargar el alojameinto")
      }
    })
  }

  editarAlojamiento(element: any){
    this.dialog.open(CrearAlojamientoComponent,{
      width:'60%',
      data:element
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllAlojamientos();
      }
    })
  }

}
