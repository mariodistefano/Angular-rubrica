import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/Persona';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  url='http://localhost:3000/Persona';

  constructor(private http : HttpClient) { }

  get():Observable<Persona[]>{
   return this.http.get<Persona[]>(this.url)
  }
  post(persona : Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url,persona)
  }
  put(id:number, persona:Persona):Observable<Persona>{
    console.log(persona)
    return this.http.put<Persona>(`${this.url}/${id}`, persona)

  }
  delete(id:Number):Observable<Persona>{
    return this.http.delete<Persona>(this.url+"/"+id)
  }
  getById(id:number):Observable<Persona>{
      return this.http.get<Persona>(this.url+"/"+id)
  }

}
