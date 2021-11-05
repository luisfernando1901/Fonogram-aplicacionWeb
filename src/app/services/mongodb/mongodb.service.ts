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
    let result = await this.http.post(`${environment.baseUrl}/login-V3`, user).toPromise();
    return result;
  }

  //Método para cambiar la contraseña de un usuario
  async changePassword(userUid: string, newPassword: object) {
    let result = await this.http.post(`${environment.baseUrl}/changePassword/${userUid}`, newPassword).toPromise();
    return result;
  }

  //Método para realizar una suscripción
  async subscribeContent(userUid: string, contentSubscription:string) {
    let subscriptionInfo = {
      userUid: userUid,
      contentSubscription: contentSubscription
    };
    let result = await this.http.post(`${environment.baseUrl}/subscribeAudioClubBeta`,subscriptionInfo ).toPromise();
    return result;
  }

  //Método para verificar si el usuario ya tiene una suscripción
  async checkSubscription(userUid: string) {
    let result = await this.http.get(`${environment.baseUrl}/verifyAudioClubBetaSubscription/${userUid}`).toPromise();
    return result;
  }

  //Método para enviar correo de recuperación de contraseña
  async sendRecoveryPassword(email: object) {
    let result = await this.http.post(`${environment.baseUrl}/sendRecoveryPasswordEmail`, email).toPromise();
    return result;
  }
}
