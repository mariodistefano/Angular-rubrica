import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contatto } from 'src/Persona';

@Injectable({
  providedIn: 'root',
})
export class ContattiService {
  url = 'http://localhost:3000/contatti';

  constructor(private http: HttpClient) {}

  get(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(this.url);
  }
  post(contatto: Contatto): Observable<Contatto> {
    return this.http.post<Contatto>(this.url, contatto);
  }
  put(id: number, contatto: Contatto): Observable<Contatto> {
    return this.http.put<Contatto>(`${this.url}/${id}/`, contatto);
  }
  delete(id: Number): Observable<Contatto> {
    console.log(this.url + '/' + id);
    return this.http.delete<Contatto>(this.url + '/' + id);
  }
  getById(id: number): Observable<Contatto> {
    return this.http.get<Contatto>(this.url + '/' + id);
  }
}
