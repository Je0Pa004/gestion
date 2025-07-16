import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Attribution {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class AttributionService {
  private apiUrl = 'http://localhost:8080/api/attributions';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Attribution[]> {
    return this.http.get<Attribution[]>(this.apiUrl);
  }

  create(obj: Attribution): Observable<Attribution> {
    return this.http.post<Attribution>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: Attribution): Observable<Attribution> {
    return this.http.put<Attribution>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Attribution> {
    return this.http.get<Attribution>(`${this.apiUrl}/${id}`);
  }
}
