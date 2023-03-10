import { Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {
  constructor(private srv:SharedService) { }

  EmployeeList:any=[];

  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      hasDriverLicense:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Çalışan Ekle";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Düzenle";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Silmek istiyor musunuz?')){
      this.srv.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.srv.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
