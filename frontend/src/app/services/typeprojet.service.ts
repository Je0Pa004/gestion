import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TypeProjet {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypeProjetService {
  private apiUrl = 'http://localhost:8080/api/typeprojets';

  constructor(private http: HttpClient) { }

  getAll(): Observable<TypeProjet[]> {
    return this.http.get<TypeProjet[]>(this.apiUrl);
  }

  create(obj: TypeProjet): Observable<TypeProjet> {
    return this.http.post<TypeProjet>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: TypeProjet): Observable<TypeProjet> {
    return this.http.put<TypeProjet>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<TypeProjet> {
    return this.http.get<TypeProjet>(`${this.apiUrl}/${id}`);
  }
}
