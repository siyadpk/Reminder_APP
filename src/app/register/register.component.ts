import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=''
  pwd=''
  email=''




  RegisterForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    email:['',[Validators.required,Validators.email]]

  })

  constructor( private ds:DataserviceService, private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  Register(){



    
    if(this.RegisterForm.valid){

    var email=this.RegisterForm.value.email
    var uname=this.RegisterForm.value.uname
    var pwd=this.RegisterForm.value.pwd

      this.ds.Register(uname,email,pwd)
      .subscribe((result:any)=>{
       if(result){
         alert(result.message)
         this.router.navigateByUrl('')
     
       }
     },
       (result:any)=>{
         alert(result.error.message);
         
       }
     )
     
       }
       else{
         alert('invalid Form')
       }

  }

}
