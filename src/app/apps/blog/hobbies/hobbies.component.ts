import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
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
}
