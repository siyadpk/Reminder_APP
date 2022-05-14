import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {

  email:any
  events:any

  date:any
  task:any
  index:any

  constructor(private ds:DataserviceService) { 

    this.email=JSON.parse(localStorage.getItem('currentmail')||'')
    this.ds.showEvent(this.email)
    .subscribe((result:any)=>{
      if(result){

      this.events=result.event

   } },
   (result)=>{
     alert(result.error.message)
   }
   )
  }

  ngOnInit(): void {
  }

  deleteRaw(e:any){
    console.log(e);
    var email=this.email

    
    alert("are you sure?")
    this.ds.deleteRaw(e,email)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }

  getValue(e:any,index:any){
    console.log(index);
    this.date=e.date
    this.task=e.event
    this.index=index
    
    this.ds.editEvenets(this.date,this.task,this.index)
    

  }

}
