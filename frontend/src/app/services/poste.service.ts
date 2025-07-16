import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Poste {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private apiUrl = 'http://localhost:8080/api/postes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Poste[]> {
    return this.http.get<Poste[]>(this.apiUrl);
  }

  create(obj: Poste): Observable<Poste> {
    return this.http.post<Poste>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // ... existing code ...
  update(id: number, obj: Poste): Observable<Poste> {
    return this.http.put<Poste>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Poste> {
    return this.http.get<Poste>(`${this.apiUrl}/${id}`);
  }
// ... existing code ...
}
