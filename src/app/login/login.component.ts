import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  header="WEICOME"
  accplaceholder ="Account please"
  acno=""
  pswd=""

  database:any={
    1000:{acno:1000,username:'max',password:1000,balance:5000}
   
    
  }

  constructor() { }

  ngOnInit(): void {
  }

acnochange(event:any){
  this.acno = event.target.value
 
}
pswdchange(event:any){
  this.pswd = event.target.value
 

}

  login(){
   var acno = this.acno
  
   var pswd = this.pswd
   

let userdetails = this.database
if(acno in userdetails){
  if(pswd == userdetails[acno]['password']){
    alert('login is successful')
  
  }
  else{
    alert('incorrect password')

  }
}
else{
  alert('user does not exist')
}

  }

}
