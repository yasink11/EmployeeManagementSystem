import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiUrl: string = BaseUrl.apiUrl;
  photoUrl:string=BaseUrl.PhotoUrl;

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.apiUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.apiUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.apiUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.apiUrl+'/Department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.apiUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.apiUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.apiUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.apiUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.apiUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'/Employee/GetAllDepartmentNames');
  }

}
