import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  display = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.display = !this.display;
  }

}
