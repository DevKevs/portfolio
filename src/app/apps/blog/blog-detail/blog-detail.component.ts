import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;

  constructor(activatedRouter: ActivatedRoute, public router: Router) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

  }

}
