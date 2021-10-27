import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { ArtistAudioContentComponent } from './components/artist-audio-content/artist-audio-content.component';
//NGZORRO
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeComponent } from './components/home/home.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  declarations: [
    ArtistProfileComponent,
    ArtistAudioContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    NzIconModule,
    NzAvatarModule,
  ]
})
export class PlatformModule { }
