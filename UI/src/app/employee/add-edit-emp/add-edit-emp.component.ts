import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  constructor(private srv:SharedService) { }
  EmployeeList:any=[];

  @Input() emp:any;
  EmployeeId!:string;
  EmployeeName!:string;
  Department!:string;
  DateOfJoining!:string;
  PhotoFileName!:string;
  hasDriverLicense!:string;
  PhotoFilePath!:string;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.srv.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.hasDriverLicense=this.emp.hasDriverLicense;
      this.PhotoFilePath=this.srv.photoUrl+'/'+this.PhotoFileName;
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
              DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName,
          hasDriverLicense:this.hasDriverLicense
          };

    this.srv.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
    DateOfJoining:this.DateOfJoining,
  PhotoFileName:this.PhotoFileName,
  hasDriverLicense:this.hasDriverLicense
};

    this.srv.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.srv.UploadPhoto(formData).subscribe((data)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.srv.photoUrl+'/'+this.PhotoFileName;
      console.log(this.PhotoFileName)
    })
  }
}