import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular Material
import {ReactiveFormsModule } from '@angular/forms';
import{MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,

    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
    
  ],
  exports:[
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,

    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,

    HttpClientModule,
    MatDialogModule
  ]
})
export class AllmoduleModule { }
