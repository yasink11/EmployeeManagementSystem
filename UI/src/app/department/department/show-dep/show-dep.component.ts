import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  constructor(private srv:SharedService) { }

  DepartmentList:any=[];

  ModalTitle!:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Departman Ekle";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Düzenle";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm('Silmek İstediğinize Emin Misiniz?')){
      this.srv.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.srv.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      this.DepartmentListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el:any){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}