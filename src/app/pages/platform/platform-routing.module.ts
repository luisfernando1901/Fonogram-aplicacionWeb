import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAudioContentComponent } from './components/artist-audio-content/artist-audio-content.component';

const routes: Routes = [
  {path: '', redirectTo: 'fonogram/artistAudioContent'},
  {path: 'fonogram/artistAudioContent',component: ArtistAudioContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
