import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TypeRubrique {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypeRubriqueService {
  private apiUrl = 'http://localhost:8080/api/typerubriques';

  constructor(private http: HttpClient) { }

  getAll(): Observable<TypeRubrique[]> {
    return this.http.get<TypeRubrique[]>(this.apiUrl);
  }

  create(obj: TypeRubrique): Observable<TypeRubrique> {
    return this.http.post<TypeRubrique>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: TypeRubrique): Observable<TypeRubrique> {
    return this.http.put<TypeRubrique>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<TypeRubrique> {
    return this.http.get<TypeRubrique>(`${this.apiUrl}/${id}`);
  }
}
