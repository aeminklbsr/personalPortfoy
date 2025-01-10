import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Github } from '../../models/github.model'



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [GithubService]
})
export class ProjectsComponent implements OnInit {
  selectedProject: Github | null = null;
  allprojectData: Github[]= [];
  isModalOpen: boolean = false;
  decodedContent: string = '';
  

  constructor(private githubService: GithubService, private http: HttpClient) { }

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

  openModal(project: Github) {
    this.selectedProject = project;

    // README.md içeriğini alma
    this.githubService.getReadmeContent(project.name).subscribe(
      (response) => {
        const content = response.content;
        this.decodedContent = atob(content); // Base64 çözümleme
        this.isModalOpen = true; // Modalı aç
      },
      (error) => {
        console.error('README.md alınamadı:', error);
        this.decodedContent = 'README.md bulunamadı veya erişilemedi.';
        this.isModalOpen = true;
      }
    );
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    this.decodedContent = '';
  }
}
