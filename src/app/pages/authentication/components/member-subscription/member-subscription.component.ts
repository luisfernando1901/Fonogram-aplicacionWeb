import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

@Component({
  selector: 'app-member-subscription',
  templateUrl: './member-subscription.component.html',
  styleUrls: ['./member-subscription.component.css']
})
export class MemberSubscriptionComponent implements OnInit {
  //Lista de opciónes de subscripcion
  subscriptionCards = [
    {
      id: "podcasters",
      title: "Podcasters",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre la industria del podcast.",
    },
    {
      id: "creatividad & producción",
      title: "Creatividad & Producción",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre podcasting y creación de contenido.",
    },
    {
      id: "marketing",
      title: "Marketing",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre marketing y emprendimiento.",
    },
    {
      id: "growth & startups",
      title: "Growth & Startups",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre growth & startups.",
    }
  ];
  //Nombre del contenido de la subscripción
  contentSubscription:string = '';
  //Arreglo de check
  checkArray = [false,false,false,false];
  //Variable que indica loading
  isLoading:boolean = true;
  //Variable donde estan los audios
  audio = new Audio();
  audioSrc = [
    'https://firebasestorage.googleapis.com/v0/b/fonogram-c82df.appspot.com/o/contenido_libre%2Ftrailers%2FPitch_audio_club_PODCASTER_para_la_web.mp3?alt=media&token=8e0cc4bc-7917-4a62-a0a7-0d09c599823e',
    'https://firebasestorage.googleapis.com/v0/b/fonogram-c82df.appspot.com/o/contenido_libre%2Ftrailers%2FPitch_audio_club_CREATIVIDAD_Y_PRODUCCION_para_la_web.mp3?alt=media&token=25ab278b-cca6-46ff-a1e8-757bf03a8305',
    'https://firebasestorage.googleapis.com/v0/b/fonogram-c82df.appspot.com/o/contenido_libre%2Ftrailers%2FPitch_audio_club_MARKETING_para_la_web.mp3?alt=media&token=c9ab8646-ce69-4d11-87cd-12d922d1d47f',
    'https://firebasestorage.googleapis.com/v0/b/fonogram-c82df.appspot.com/o/contenido_libre%2Ftrailers%2FPitch_audio_club_STARTUPS_para_la_web.mp3?alt=media&token=330e42ff-8874-4b3e-acb0-21ad79a96085'
  ];

  constructor(private router:Router,private _mongodb: MongodbService) {
    this.checkSubscription();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.audio.pause();
    this.audio.src = '';
  }

  //Método para cambiar el contenido de la subscripción
  selectCard(cardInfo:any, i:number){
    this.checkArray = [false,false,false,false];
    console.log(cardInfo);
    this.contentSubscription = cardInfo['id'];
    this.checkArray[i] = true;
  }

  //Método para realizar la suscripción
  async makeSubscription(){
    let userUid = sessionStorage.getItem('fonogram_userUid')!;
    await this._mongodb.subscribeContent(userUid,this.contentSubscription);
    switch (this.contentSubscription) {
      case "podcasters":
        await this.router.navigate(['/platform/fonogram/podcasters']);
        break;
      case "creatividad & producción":
        await this.router.navigate(['/platform/fonogram/creatividad & producción']);
        break;
      case "marketing":
        await this.router.navigate(['/platform/fonogram/marketing']);
        break;
      case "growth & startups":
        await this.router.navigate(['/platform/fonogram/growth & startups']);
        break;
      default:
        break;
    }
  }

  //Método para verificar si el usuario ya está suscrito a alguna de las opciones y redireccionarlo a la página correspondiente
  async checkSubscription(){
    let userUid = sessionStorage.getItem('fonogram_userUid')!;
    let result:any = await this._mongodb.checkSubscription(userUid);
    console.log(result);
    if(result.subscribed){
      switch (result.contentSubscription) {
        case "podcasters":
          await this.router.navigate(['/platform/fonogram/podcasters']);
          break;
        case "creatividad & producción":
          await this.router.navigate(['/platform/fonogram/creatividad & producción']);
          break;
        case "marketing":
          await this.router.navigate(['/platform/fonogram/marketing']);
          break;
        case "growth & startups":
          await this.router.navigate(['/platform/fonogram/growth & startups']);
          break;
        default:
          break;
      }
    }
    this.isLoading = false;
  }

  //Método para reproducir trailer
  playTrailer(i:number){
  this.audio.src = this.audioSrc[i];
  this.audio.load();
  this.audio.play();
  }
  
}
