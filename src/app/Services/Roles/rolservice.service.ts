import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../loalStorage/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class RolserviceService {
  private token: string = '';

  private URL: string = 'http://191.88.249.172:3000/Roles/';
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
  }
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL}`, { headers });
  }
}
