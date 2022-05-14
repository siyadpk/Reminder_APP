import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  date:any
  newTask:any

  olddate:any
  oldtask:any
  index:any

  constructor(private ds:DataserviceService , private router:Router) {

    this.olddate=this.ds.date
    this.oldtask=this.ds.task
   }

  ngOnInit(): void {
  }

  newEditvalue(){
    let newdate=this.date
    let newtask=this.newTask
    let email=JSON.parse(localStorage.getItem("currentmail")||"")
    let index=this.ds.index
    console.log(index);
    

    this.ds.editNewvalue(email,index,newdate,newtask)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("/showevents")
        
      }
    },
    (result)=>{
      alert(result.error.message)
    })

  }


}
