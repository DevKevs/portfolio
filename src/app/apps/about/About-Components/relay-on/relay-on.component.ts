import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Gaming',
      fieldText: 'Gaming is my digital playground where I conquer challenges, explore new worlds, and compete in thrilling battles.'
    },
    {
      icon: 'sl-icon-screen-desktop text-info-gradiant',
      field: 'Movies & Anime',
      fieldText: 'Media is my gateway to a world of vivid storytelling, captivating characters, and imaginative adventures.'
    },
    {
      icon: 'sl-icon-earphones text-info-gradiant',
      field: 'Music',
      fieldText: 'Music is the soundtrack of my life, setting the tone for every emotion and moment. Love all Latin music.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
