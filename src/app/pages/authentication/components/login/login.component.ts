import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Formulario de Login
  userLoginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  //Mensaje para el usuario
  loginMessage:string = '';

  constructor(private router:Router, private fb:FormBuilder, private _mongodb: MongodbService) { }

  ngOnInit(): void {
  }

  goToForgotPassword(){
    this.router.navigate(['/login/forgotPassword']);
  }

  //Método para validar el formulario de Login
  async login(){
    try {
      let result:any = await this._mongodb.loginUser(this.userLoginForm.value);
      console.log(result);
      if (result.user_uid != null) {
        this.loginMessage = '';
        sessionStorage.setItem('fonogram_user_uid', result.user_uid);
        await this.router.navigate(['/login/memberSubscription']);
      }
      else{
        this.loginMessage = result.message;
      }
    } catch (error) {
      this.loginMessage = 'Error en el login'
    }
  }

}
