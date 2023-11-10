import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-preview',
  templateUrl: './projects-preview.component.html',
  styleUrls: ['./projects-preview.component.css']
})
export class ProjectsPreviewComponent {
  relayOn = [
    {
      image: '../../../../assets/images/blog/portfolio.png',
      field: 'This portfolio',
      fieldText: 'Professional portfolio that effectively showcases the projects, and achievements.',
      link: 'https://github.com/DevKevs/portfolio'
    },
    {
      image: '../../../../assets/images/blog/products.jpg',
      field: 'Store management',
      fieldText: 'Develop a Flutter app for small businesses to manage their store operations efficiently.',
      link: 'https://github.com/DevKevs/products-app'
    },
    {
      image: '../../../../assets/images/blog/movie.jpg',
      field: 'IMdb MovieApp',
      fieldText: 'Develop Movie App that provides users to explore, discover, and keep track of their favorite movies.',
      link: 'https://github.com/DevKevs/flutter-movieApp'
    },
  ];
}
