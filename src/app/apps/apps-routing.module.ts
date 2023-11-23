import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: BlogComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: AboutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
