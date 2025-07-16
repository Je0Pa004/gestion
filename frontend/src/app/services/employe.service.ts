import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employe {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private apiUrl = 'http://localhost:8080/api/employes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  create(obj: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.apiUrl}/${id}`);
  }
}
