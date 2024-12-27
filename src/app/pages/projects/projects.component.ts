import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Github } from '../../models/github.model';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [GithubService]
})
export class ProjectsComponent implements OnInit {

  allprojectData: Github[]= [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getProjectData().subscribe(
      (projects) => {
        this.allprojectData = projects;
        console.log(this.allprojectData);
      },
      (error) => {
        console.error('Hata oluştu', error);
      }
    );
  }
}
