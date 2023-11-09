import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { estado } from 'src/app/models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoserviceService {
  private Estados: estado[] =[];

  getEstado(){
    return this.Estados;
  }

  private URL: string = 'http://191.88.249.172:3000/Estados/';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.URL}`, { headers });
  }
}
