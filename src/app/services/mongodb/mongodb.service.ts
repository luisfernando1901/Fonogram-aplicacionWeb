import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  //Método para loguear a un usuario
  async loginUser(user: object) {
    let result = await this.http.post(`${environment.devBaseUrl}/login-V3`, user).toPromise();
    return result;
  }

  //Método para cambiar la contraseña de un usuario
  async changePassword(userUuid: string, newPassword: object) {
    let result = await this.http.post(`${environment.devBaseUrl}/changePassword/${userUuid}`, newPassword).toPromise();
    return result;
  }
}
