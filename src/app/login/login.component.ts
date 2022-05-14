import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  LoginForm=this.fb.group({

    pwd:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    email:['',[Validators.required,Validators.email]]

  })
 


  constructor(private ds:DataserviceService, private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    var email=this.LoginForm.value.email
    var pwd=this.LoginForm.value.pwd

    
    

   
   if(this.LoginForm.valid){
    this.ds.login(email,pwd)
    .subscribe((result:any)=>{
      if(result){
        
        localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
        localStorage.setItem('currentmail',JSON.stringify(result.currentmail))
        localStorage.setItem('currentpwd',JSON.stringify(result.currentpwd))
        
        alert(result.message)
        this.router.navigateByUrl('dashboard')
      }

    },
    (result=>{
      alert(result.error.message)
    }))

  }
    else{
      alert('invalid form')
    }

  }

}
