import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent {
  constructor(private srv:SharedService) { }

  @Input() dep:any;
  DepartmentId!:string;
  DepartmentName!:string;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.srv.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.srv.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
