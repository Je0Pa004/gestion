import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Nationalite {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class NationaliteService {
  private apiUrl = 'http://localhost:8080/api/nationalites';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Nationalite[]> {
    return this.http.get<Nationalite[]>(this.apiUrl);
  }

  create(obj: Nationalite): Observable<Nationalite> {
    return this.http.post<Nationalite>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: Nationalite): Observable<Nationalite> {
    return this.http.put<Nationalite>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Nationalite> {
    return this.http.get<Nationalite>(`${this.apiUrl}/${id}`);
  }
}
