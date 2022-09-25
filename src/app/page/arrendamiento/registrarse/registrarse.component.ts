import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListaArrendadores } from 'src/app/interfaces/listaArrendamiento';
import { ListaEstudiantes } from 'src/app/interfaces/listaEstudiantes';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  form!: FormGroup;
  loading=false;
  selected='';
  
  constructor(private fb:FormBuilder, 
    private _usuarioService:ListaEstudiantesService, 
    private dialogRef:MatDialogRef<RegistrarseComponent>,
    private _arrendadorService:ListaArrendadoresService, 
    private router:Router, private _snackBar:MatSnackBar) {
   }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:['', Validators.required],
      name:['', Validators.required],
      correo:['', Validators.required],
      phone:['', Validators.required],
      UserName:['', Validators.required],
    })
  }

  addUsuario(){
    if(this.selected=='estudiante'){
      this._usuarioService.postEstudiante(this.form.value)
      .subscribe({
        next:(res)=>{
          alert("Su cuenta de estudiante se ha creado correctamente");
          this.form.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Ha ocurrido un pequeño error")
        }
      })
    }
    else if(this.selected=='arrendador'){
      this._arrendadorService.postArrendador(this.form.value)
      .subscribe({
        next:(res)=>{
          alert("Su cuenta de arrendador se creó correctamente");
          this.form.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Ha ocurrido un pequeño error")
        }
      })
    }
  }


  //  agregarUsuario(){

  //   if(this.selected=='estudiante'){
  //     const user: ListaEstudiantes={
  //       id: this.form.value.id,
  //       name: this.form.value.name,
  //       correo: this.form.value.correo,
  //       phone: this.form.value.phone,
  //       UserName: this.form.value.UserName,
  //     }
  
  //     this._usuarioService.agregarUsuario(user);
  
  //     this._snackBar.open('La cuenta de estudiante ha sido creada exitosamente','',{
  //       duration:1500,
  //       horizontalPosition:'center',
  //       verticalPosition: 'bottom'
  //     })
  //     this.fakeLoadingEstudiante();
  //   }

  //   if(this.selected=='arrendador'){
  //     const user:ListaArrendadores={
  //       id: this.form.value.id,
  //       name: this.form.value.name,
  //       correo: this.form.value.correo,
  //       phone: this.form.value.phone,
  //       UserName: this.form.value.UserName,
  //     }
  //     this._arrendadorService.agregarUsuarioArrendador(user);
  //     this.fakeLoadingArrendador();
  //     this._snackBar.open('La cuenta de arrendador ha sido creada exitosamente','',{
  //       duration:1000,
  //       horizontalPosition:'center',
  //       verticalPosition: 'bottom'
  //     });
  //   }
  //  }

   fakeLoadingEstudiante(){
    this.loading=true;
    setTimeout(()=>{
      this.router.navigate(['/administrador/lista-estudiantes']);
    },1500);
  }

  fakeLoadingArrendador(){
    this.loading=true;
    setTimeout(()=>{
     this.router.navigate(['/administrador/lista-arrendadores']);
    },1500);
  }
}
