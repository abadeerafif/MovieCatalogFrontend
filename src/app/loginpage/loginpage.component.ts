import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  
  @Output() loginevent = new EventEmitter<string>();

  fireloginevent()
  {
    this.loginevent.emit("login");

  }
  
  constructor(private router: Router) {
    if(localStorage.getItem("auth")!=null)
    {
      this.router.navigate(["homepage"]);
      
    }
   

  }
  signup=false;
  hide = true;
  emailvalidator = new FormControl('', [Validators.required, Validators.email]);
  email: string="";
  password: string="";
  submit()
  {
    
    if(this.signup)
    {
      fetch("http://localhost:7000/signup",{"method":"POST",headers: {"Content-Type": "application/json"},body:JSON.stringify({"email":this.email,"password":this.password})}).then(response=>{response.json().then(json=>{console.log(json);
      
        if(json["error"]!=null)
        {
          
          
          alert(json["error"])
        }
        else if(json=="0")
        {
          alert("this email is already registered please Sign in")
          this.signup=false;

        }
        else if(json=="1")
        {
          alert("registered")
          this.signup=false;
        }
       
      });
      
      })

    }
    else{
      fetch("http://localhost:7000/signin/"+this.email+"/"+this.password,{"method":"GET","headers":{}}).then(response=>{response.json().then(json=>{console.log(json);
      
        if(json=="0")
        {
          
          
          alert("wrong passwrod")
        }
        else if(typeof json=="number")
        {
          localStorage.setItem('auth', JSON.stringify({token:json,email:this.email}));
          this.loginevent.emit("login");
         
          
          this.router.navigate(["homepage"]);

        }
        else{
          
          
          
          alert("email address is not in our database please sign up")
          

        }
      });
      
      })
    }
  }

  hidepassword()
  {
    console.log("abadeer");
    
    this.hide=!this.hide
  }

  getErrorMessage() {
    
    
    if (this.emailvalidator.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailvalidator.hasError('email') ? 'Not a valid email' : '';
  }
  signupfn()
  {
    this.signup=!this.signup
  }

}
