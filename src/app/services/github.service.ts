import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Github } from '../models/github.model';
import { githubApi } from '../../environments/githubApi';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

constructor(private http: HttpClient) { }

// Tüm projeleri almak için mevcut metod
getProjectData(): Observable<Github[]> {
  return this.http.get<Github[]>('https://api.github.com/users/aeminklbsr/repos');
}

// Belirli bir projenin README.md dosyasını almak için yeni metot
getReadmeContent(repoName: string): Observable<any> {
  const url = `https://api.github.com/repos/aeminklbsr/${repoName}/contents/README.md`;
  return this.http.get<any>(url);
}

}
