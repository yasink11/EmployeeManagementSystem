import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department/department.component';
import { EmployeeComponent } from './employee/employee/employee.component';

const routes: Routes = [
  {path:'department',component:DepartmentComponent, loadChildren:() =>import('./department/department.module').then(x=>x.DepartmentModule)},
  {path:'employee', component:EmployeeComponent,loadChildren:()=>import('./employee/employee.module').then(x=>x.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
