import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/json/about.json';

  constructor(private http: HttpClient) { }

  getPersonalInfo(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
