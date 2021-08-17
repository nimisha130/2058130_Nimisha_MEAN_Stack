import { Component, OnInit } from '@angular/core';
import { contacts } from '../contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username:string="[]"
  password:string="[]"

  loginflag:boolean=false

  signupflag:boolean=true

  registration:boolean=true

  homeflag:boolean=false

  tableInfo : Array<contacts> = new Array()
  
  tableflag:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(loginRef:NgForm){
    let loginReq = loginRef.value
    if(loginReq.loginUser==this.username && loginReq.loginPass==this.password){
      this.loginflag=false
      this.homeflag=true
      loginRef.reset()
    }
  }

  userSignup(signupRef:NgForm){
    let signupReq = signupRef.value
    this.username= signupReq.user
    this.password= signupReq.pass
    this.registration=false
    signupRef.reset()
    this.login()
  }

  addData(nameRef:NgForm){
    let nContact = nameRef.value;
    let newInfo = new contacts(nContact.contactName,+nContact.cellNumber);
    this.tableInfo.push(newInfo);
  }

  loadData(){
    this.tableflag = !this.tableflag;
  }

  login(){
    this.loginflag=false
    this.signupflag=true
  }

  signup(){
    this.signupflag=false
    this.loginflag=true
  }

}
