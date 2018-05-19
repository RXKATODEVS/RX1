import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeframeComponent } from './youtubeframe.component';

describe('YoutubeframeComponent', () => {
  let component: YoutubeframeComponent;
  let fixture: ComponentFixture<YoutubeframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
