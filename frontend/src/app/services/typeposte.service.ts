import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TypePoste {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypePosteService {
  private apiUrl = 'http://localhost:8080/api/typepostes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<TypePoste[]> {
    return this.http.get<TypePoste[]>(this.apiUrl);
  }

  create(obj: TypePoste): Observable<TypePoste> {
    return this.http.post<TypePoste>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: TypePoste): Observable<TypePoste> {
    return this.http.put<TypePoste>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<TypePoste> {
    return this.http.get<TypePoste>(`${this.apiUrl}/${id}`);
  }
}
