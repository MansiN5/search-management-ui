import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameListService {
  private apiUrl = 'https://localhost:7174/api/';

  constructor(private http: HttpClient) {}

  getAllNames(searchQuery: string): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"
      }),
      params: new HttpParams().set('filter', searchQuery), // Set the search query as a parameter
      body: {}
    };
    return this.http.get<any[]>(this.apiUrl+'search', httpOptions);;
  }
}
