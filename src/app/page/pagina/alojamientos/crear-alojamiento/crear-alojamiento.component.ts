import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alojamiento } from 'src/app/interfaces/alojamiento';
import { NuevoAlojamiento } from 'src/app/model/NuevoAlojamiento';
import { AlojamientoService } from 'src/app/service/alojamiento.service';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PortalInjector } from '@angular/cdk/portal';

@Component({
  selector: 'app-crear-alojamiento',
  templateUrl: './crear-alojamiento.component.html',
  styleUrls: ['./crear-alojamiento.component.css']
})
export class CrearAlojamientoComponent implements OnInit {
  alojamiento: NuevoAlojamiento= new NuevoAlojamiento();

  form!:FormGroup;
   actionBtn: string="Save"

  constructor(private fb:FormBuilder ,private _alojamientoService: AlojamientoService,
    private MyDialog:MatDialogRef<CrearAlojamientoComponent>, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.form=this.fb.group({
      id:        ['', Validators.required],
      direccion: ['', Validators.required],
      precio:    ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    if(this.editData){
      this.actionBtn="Update";
      this.form.controls['id'].setValue(this.editData.id);
      this.form.controls['direccion'].setValue(this.editData.direccion);
      this.form.controls['precio'].setValue(this.editData.precio);
      this.form.controls['descripcion'].setValue(this.editData.descripcion);
    }
  }

  addAlojamiento(){
    if(!this.editData){
      if(this.form.valid){
        this._alojamientoService.postProduct(this.form.value)
        .subscribe({
          next:(res)=>{
            alert("Alojamiento añadido exitosamente");
            this.form.reset();
           this.MyDialog.close('aceptar');
          },
          error:()=>{
            alert("Ha ocurrido un error, intentelo nuevamente")
          }
        })
      }
    }else{
      this.updateAlojamiento()
    }
  }
   
  updateAlojamiento(){

    this._alojamientoService.putAlojamiento(this.form.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Alojamiento modificado correctamente");
        this.form.reset();
        this.MyDialog.close('update');
      },
      error:()=>{
        alert("Ha ocurrido un error, intente de nuevo");
      }
    })
  }

}