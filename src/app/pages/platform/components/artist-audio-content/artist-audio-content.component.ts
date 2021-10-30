import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist-audio-content',
  templateUrl: './artist-audio-content.component.html',
  styleUrls: ['./artist-audio-content.component.css']
})
export class ArtistAudioContentComponent implements OnInit {
  //Variables
  contentTitle: string = '';
  artistName: string = '';
  screenWidth: any;
  screenHeight: any;
  widthSize = '';
  //Subscription variable
  subscriptionDone = false;
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
    this.screenWidth = window.innerWidth - 100;
    this.screenHeight = window.innerHeight;
    console.log(this.screenWidth);
    this.artistName = this.activatedRoute.snapshot.params.artistprofile;
    this.contentTitle = this.activatedRoute.snapshot.params.contentTitle;
    this.widthSize = `${this.screenWidth}px`
    if (this.screenWidth <= 450) {
      this.widthSize = `500px`
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth - 100;
    this.screenHeight = window.innerHeight;
    console.log(this.screenWidth);
    this.widthSize = `${this.screenWidth}px`
    if (this.screenWidth <= 450) {
      this.widthSize = `500px`
    }
  }
  subscribeArtist(){
    this.subscriptionDone = true;
  }

}