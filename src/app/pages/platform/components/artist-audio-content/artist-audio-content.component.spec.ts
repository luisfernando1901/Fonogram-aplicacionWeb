import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAudioContentComponent } from './artist-audio-content.component';

describe('ArtistAudioContentComponent', () => {
  let component: ArtistAudioContentComponent;
  let fixture: ComponentFixture<ArtistAudioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistAudioContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAudioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
