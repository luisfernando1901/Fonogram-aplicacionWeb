import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerThemeDark, PlayerThemeLight } from 'gs-player';
@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  playerTheme = PlayerThemeLight;
  //Variables
  artistName: string = '';
  //Subscription variable
  subscriptionDone = false;
  files = [
    {
      url: 'https://res.cloudinary.com/fonogram-app/video/upload/v1627790781/PODCASTs/PRESENTE%20Y%20PASADO/04%20Lenguas%20Ind%C3%ADgenas%20-%20Maximiliano%20D%C3%ADaz/EP_4_Lenguas_indijenas_EDITADO_vjrijn.mp3',
      name: 'Presente y Pasado',
      artist: 'Maximiliano Díaz',
      album: 'My album'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.artistName = this.activatedRoute.snapshot.paramMap.get('artistprofile')!;
    console.log(this.artistName);
  }

  subscribeArtist(){
    this.subscriptionDone = true;
  }

}
