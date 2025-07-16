import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RubriquePaiement {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class RubriquePaiementService {
  private apiUrl = 'http://localhost:8080/api/rubriquepaiements';

  constructor(private http: HttpClient) { }

  getAll(): Observable<RubriquePaiement[]> {
    return this.http.get<RubriquePaiement[]>(this.apiUrl);
  }

  create(obj: RubriquePaiement): Observable<RubriquePaiement> {
    return this.http.post<RubriquePaiement>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: RubriquePaiement): Observable<RubriquePaiement> {
    return this.http.put<RubriquePaiement>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<RubriquePaiement> {
    return this.http.get<RubriquePaiement>(`${this.apiUrl}/${id}`);
  }
}
