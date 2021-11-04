import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerThemeDark, PlayerThemeLight } from 'gs-player';
@Component({
  selector: 'app-artist-audio-content',
  templateUrl: './artist-audio-content.component.html',
  styleUrls: ['./artist-audio-content.component.css']
})
export class ArtistAudioContentComponent implements OnInit {
  playerTheme = PlayerThemeLight;
  //Variables
  contentTitle: string = '';
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
  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.artistName = this.activatedRoute.snapshot.params.artistprofile;
    this.contentTitle = this.activatedRoute.snapshot.params.contentTitle;
  }

  subscribeArtist(){
    this.subscriptionDone = true;
  }

  continueWithoutSubscription(){
    this.subscriptionDone = true;
  }

}