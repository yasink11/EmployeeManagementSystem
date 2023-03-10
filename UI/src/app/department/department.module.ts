import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent
  ]
})
export class DepartmentModule { }
