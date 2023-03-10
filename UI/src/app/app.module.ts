import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';

import{HttpClientModule} from'@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { SharedService } from './service/shared.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartmentModule,
    EmployeeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DepartmentModule,
    EmployeeModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
