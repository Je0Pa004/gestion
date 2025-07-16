import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Grade {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private apiUrl = 'http://localhost:8080/api/grades';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
  }

  create(obj: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: Grade): Observable<Grade> {
    return this.http.put<Grade>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Grade> {
    return this.http.get<Grade>(`${this.apiUrl}/${id}`);
  }
}
