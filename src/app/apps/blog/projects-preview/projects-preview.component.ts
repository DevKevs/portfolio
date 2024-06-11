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
      link: 'https://github.com/DevKevs/portfolio',
      btnText: 'View Repo'
    },
    {
      image: '../../../../assets/images/blog/do-validator.png',
      field: 'do-validator package',
      fieldText: 'Develop in TypeScript, do-validator is a package that offers a simple and efficient way to validate Dominican Republic ID numbers.',
      link: 'https://www.npmjs.com/package/do-validator',
      btnText: 'View Package'
    },
    {
      image: '../../../../assets/images/blog/movie.jpg',
      field: 'IMdb MovieApp',
      fieldText: 'Develop Movie App that provides users to explore, discover, and keep track of their favorite movies.',
      link: 'https://github.com/DevKevs/flutter-movieApp',
      btnText: 'View Repo'
    },
  ];
}
