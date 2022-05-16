import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:44395/api/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

}
