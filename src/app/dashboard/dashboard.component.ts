import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  LoginDate:any
  currentuser:any

  newTask:any
  date:any
  

  constructor( private ds:DataserviceService,private router:Router) { 
    this.currentuser=JSON.parse(localStorage.getItem('currentuser')||'')
    this.LoginDate=new Date()
  }

  ngOnInit(): void {
  }

  addEvents(){
    
   var Task=this.newTask
   var date=this.date
   var currentmail=JSON.parse(localStorage.getItem("currentmail")||"")
   var currentpwd=JSON.parse(localStorage.getItem("currentpwd")||"")
   console.log(currentmail);
   console.log(currentpwd);
   

   this.ds.addEvent(currentmail,currentpwd,date,Task)
   .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      
  
    }
  },
    (result:any)=>{
      alert(result.error.message);
      
    }
  )   
  }

  //logout

  
  logout(){
  
    alert('Are you sure?')
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentpwd')
    localStorage.removeItem('currentmail')
    this.router.navigateByUrl('')
  }





}
