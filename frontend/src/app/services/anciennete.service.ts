import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // chemin correct ?

export interface Anciennete {
  id?: number;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class AncienneteService {
  private apiUrl = `${environment.apiUrl}/anciennetes`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Anciennete[]> {
    return this.http.get<Anciennete[]>(this.apiUrl);
  }

  create(obj: Anciennete): Observable<Anciennete> {
    return this.http.post<Anciennete>(this.apiUrl, obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, obj: Anciennete): Observable<Anciennete> {
    return this.http.put<Anciennete>(`${this.apiUrl}/${id}`, obj);
  }

  getById(id: number): Observable<Anciennete> {
    return this.http.get<Anciennete>(`${this.apiUrl}/${id}`);
  }
}
