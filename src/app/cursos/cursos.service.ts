import { Curso } from './curso';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Curso[]>(this.API);
  }
}
