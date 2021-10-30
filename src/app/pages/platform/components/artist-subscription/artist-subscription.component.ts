import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-subscription',
  templateUrl: './artist-subscription.component.html',
  styleUrls: ['./artist-subscription.component.css']
})
export class ArtistSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subscribeArtist(){
    //Aqui invoco el service para suscribirse al artista
    console.log('subscribeArtist');
  }

}
