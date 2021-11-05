import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  //Variable para almacenar el email del usuario
  userEmailForm = this.fb.group({
    email: ['']
  });

  constructor(private _mongodb:MongodbService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  //Método para enviar email de recuperación de contraseña
  async sendEmail(){
    let userEmail = this.userEmailForm.value;
    let result = await this._mongodb.sendRecoveryPassword(userEmail);
    await this.router.navigate(['/login']);
  }
}
