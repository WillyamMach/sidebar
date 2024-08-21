import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GastosService {
  private ApiUrl: string = 'http://localhost:8080/api-gastos.php'
  constructor(private http: HttpClient) { }


  gastosApi(data: string): Observable<any> {
    let params = new HttpParams().set('data', data)

    return this.http.get<any>(this.ApiUrl + params);
  }
}
