import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './show-emp/show-emp.component';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ]
})
export class EmployeeModule { }
