import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //crear el formulario
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { RegistrarseComponent } from '../registrarse/registrarse.component';


@Component({
  selector: 'app-login-arrendamiento',
  templateUrl: './login-arrendamiento.component.html',
  styleUrls: ['./login-arrendamiento.component.css']
})
export class LoginArrendamientoComponent implements OnInit {

  form:FormGroup;
  loading= false;
  selected=''; 

  //conexion con html mediante formControlName
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar,
     private router:Router, private dialog:MatDialog, private _estudiante:ListaEstudiantesService) { 

    this.form= this.fb.group({
      usuario:['', Validators.required],
      contraseña:['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  //ejecutar al hacer click en boton login
  ingresar(){

    const usuario=this.form.value.usuario;
    const password= this.form.value.contraseña;

    
    if(this.selected== 'estudiante' && usuario=='manuel lozada' && password=='2282'){
      this.fakeLoadingEstudient();
    
     }else if(this.selected=='arrendador' && usuario=='jose luis' && password=='1234'){
        this.fakeLoading();
      
    }else if(this.selected=='administrador' && usuario=='admin' && password=='4321'){
      this.fakeLoadingAdmin();
    }
    else{
      this.error();
      this.form.reset();
    }
  
}

openDialog(){
  this.dialog.open(RegistrarseComponent,{
    width:'70%'
  });
}


error(){
  this._snackBar.open('Usuario o contraseña incorrecta','',{
   duration: 4000,
   horizontalPosition: 'center'
  })
};

fakeLoading(){
 this.loading=true;
 setTimeout(()=>{
   this.router.navigate(['pagina']);
 }, 1500);
}

fakeLoadingEstudient(){
  this.loading=true;
  setTimeout(()=>{
    this.router.navigate(['portal-estudiante']);
  }, 1500);
}

fakeLoadingAdmin(){
  this.loading=true;
  setTimeout(()=>{
    this.router.navigate(['administrador']);
  },1500);
}

}