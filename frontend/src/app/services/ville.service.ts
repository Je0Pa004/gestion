import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Ville {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private apiUrl = 'http://localhost:8080/api/villes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ville[]> {
    return this.http.get<Ville[]>(this.apiUrl);
  }

  create(obj: Ville): Observable<Ville> {
    return this.http.post<Ville>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: Ville): Observable<Ville> {
    return this.http.put<Ville>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Ville> {
    return this.http.get<Ville>(`${this.apiUrl}/${id}`);
  }
}
