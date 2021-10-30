import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAudioContentComponent } from './components/artist-audio-content/artist-audio-content.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { ArtistSubscriptionComponent } from './components/artist-subscription/artist-subscription.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'subscription', component: ArtistSubscriptionComponent},
  {path:':artistprofile', component: ArtistProfileComponent},
  {path:':artistprofile/:contentTitle', component: ArtistAudioContentComponent},
  {path: '', redirectTo: 'fonogram/artistAudioContent'},
  {path: 'fonogram/artistAudioContent',component: ArtistAudioContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
