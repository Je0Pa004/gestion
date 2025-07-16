import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TypeContrat {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypeContratService {
  private apiUrl = 'http://localhost:8080/api/typecontrats';

  constructor(private http: HttpClient) { }

  getAll(): Observable<TypeContrat[]> {
    return this.http.get<TypeContrat[]>(this.apiUrl);
  }

  create(obj: TypeContrat): Observable<TypeContrat> {
    return this.http.post<TypeContrat>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: TypeContrat): Observable<TypeContrat> {
    return this.http.put<TypeContrat>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<TypeContrat> {
    return this.http.get<TypeContrat>(`${this.apiUrl}/${id}`);
  }
}
