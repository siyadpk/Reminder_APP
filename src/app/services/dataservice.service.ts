import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  date:any
  task:any
  index:any

  constructor(private http:HttpClient) { }

//editevents automatic loading
editEvenets(date:any,task:any,index:any){
  this.date=date
  this.task=task
  this.index=index

}


  Register(uname:any,email:any,pwd:any){

    const data={
      uname,
      email,
      pwd
    }
    return this.http.post('http://localhost:3001/register',data)
    }

    login(email:any,pwd:any){

      const data={
        
        email,
        pwd
      }
      return this.http.post('http://localhost:3001/login',data)
      }


  addEvent(currentmail:any,currentpwd:any,date:any,task:any){

    const data={
      currentmail,
      currentpwd,
      date,
      task,

    }
    return this.http.post('http://localhost:3001/addevent',data)
  }

  //showevents

  showEvent(email:any){
    const data={
      email
    }
    return this.http.post('http://localhost:3001/showevent',data)
  }
  

  //deleteraw

  deleteRaw(index:any,email:any){
    console.log(index);
    
    const data={
      index,
      email

    }

    return this.http.post('http://localhost:3001/deleteraw',data)



  }

  //edit new value to updation
  editNewvalue(email:any,index:any,date:any,task:any){

    const data={
      email,
      index,
      date,
      task
    }
    return this.http.post('http://localhost:3001/neweditvalue',data)


  }


}
