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

getProjectData(): Observable<Github[]> {
  return this.http.get<Github[]>(githubApi.getProjectApi);
}

}
