import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { estado } from 'src/app/models/estado';
import { LocalStorageService } from '../loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoserviceService {
  private Estados: estado[] =[];
  private token: string = '';

  getEstado(){
    return this.Estados;
  }

  private URL: string = 'http://191.88.249.172:3000/Estados/';
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = serviceLocalStorage.getItem('jwt');
  }
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL}`, { headers });
  }
}
