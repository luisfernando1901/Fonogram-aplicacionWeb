import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSubscriptionComponent } from './artist-subscription.component';

describe('ArtistSubscriptionComponent', () => {
  let component: ArtistSubscriptionComponent;
  let fixture: ComponentFixture<ArtistSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
