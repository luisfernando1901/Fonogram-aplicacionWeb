import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-artist-audio-content',
  templateUrl: './artist-audio-content.component.html',
  styleUrls: ['./artist-audio-content.component.css']
})
export class ArtistAudioContentComponent implements OnInit {
  // get the component instance to have access to plyr instance

// or get it from plyrInit event
player: Plyr | undefined;
 
videoSources: Plyr.Source[] = [
  {
    src: 'https://res.cloudinary.com/fonogram-app/video/upload/v1627783196/PODCASTs/PRESENTE%20Y%20PASADO/01%20El%20viejo%20Oeste%20-%20Maximiliano%20D%C3%ADaz/EP_1_El_Viejo_Oeste.mp3_EDITADO_glgu9i.mp3',
    type: 'audio/mp3',
  },
];
 
played(event: Plyr.PlyrEvent) {
  console.log('played', event);
}
 
play(): void {
  this.player!.play(); // or this.plyr.player.play()
}
  constructor() { }

  ngOnInit(): void {
  }

}
