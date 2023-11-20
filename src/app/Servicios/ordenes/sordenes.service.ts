import { Injectable } from '@angular/core';
import { jornada } from 'src/app/models/jordanas';
import { ordenes_matenimiento } from 'src/app/models/ordenes_mantenimiento';
import { persona } from 'src/app/models/persona';
import { rol } from 'src/app/models/rol';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../loalStorage/local-storage.service';
import { estado } from 'src/app/models/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SordenesService {
  private forden: ordenes_matenimiento = new ordenes_matenimiento();
  private URL: string = 'http://191.88.249.172:3002/ordenes';
  private token: string = '';
  private headers = new HttpHeaders();

  private _ordenes: ordenes_matenimiento[] = [];
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
  }
  getOrden() {
    console.log('getOrden:', this.forden);
    return this.forden;
  }

  setOrden(_orden: ordenes_matenimiento) {
    console.log('setOrden:', _orden);
    this.forden = _orden;
  }
  ordenes(): Observable<any> {
    return this.http.get(this.URL, { headers: this.headers });
  }
  ordenesP(): Observable<any> {
    return this.http.get(this.URL+"/pendientes", { headers: this.headers });
  }
  createOrden(orden: ordenes_matenimiento): Observable<any> {
    return this.http.post(this.URL, orden, { headers: this.headers });
  }
  putOrden(orden: ordenes_matenimiento): Observable<any> {
    return this.http.put(this.URL, orden, { headers: this.headers });
  }
}
