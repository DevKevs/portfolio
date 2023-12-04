import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRelayOnComponent } from './projects-relay-on.component';

describe('ProjectsRelayOnComponent', () => {
  let component: ProjectsRelayOnComponent;
  let fixture: ComponentFixture<ProjectsRelayOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsRelayOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsRelayOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
