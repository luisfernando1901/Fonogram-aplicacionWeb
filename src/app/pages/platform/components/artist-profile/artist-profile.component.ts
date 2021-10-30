import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  //Variables
  artistName: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.artistName = this.activatedRoute.snapshot.paramMap.get('artistprofile')!;
    console.log(this.artistName);
  }

}
