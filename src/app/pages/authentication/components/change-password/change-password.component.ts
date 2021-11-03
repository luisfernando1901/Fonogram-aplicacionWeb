import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  //uuid de usuario
  user_uuid:string = '';
  //Nueva contraseña
  newPasswordForm = this.fb.group({
    newPassword: ['']
  });
  //Variable de control de carga
  isLoading = false;
  //Change Password message
  changePasswordMessage = '';

  constructor(private route:ActivatedRoute, private fb:FormBuilder, private router:Router, private _mongodb:MongodbService) { }

  ngOnInit(): void {
    this.user_uuid = this.route.snapshot.paramMap.get('uuid')!;
  }

  //Metodo para cambiar la contraseña (FALTA TERMINAR)
  async changePassword(){
    this.isLoading = true;
    try {
      console.log(this.newPasswordForm.value);
      let result = await this._mongodb.changePassword(this.user_uuid, this.newPasswordForm.value);
      await this.router.navigate(['/login']);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.changePasswordMessage = 'No se pudo cambiar de contraseña';
    }
  }

}
