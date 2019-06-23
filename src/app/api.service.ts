import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Contpol } from  './contpol';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) { }

  createContact(contpol: Contpol): Observable<Contpol>{
    return this.httpClient.post<Contpol>(`${this.PHP_API_SERVER}/api/create.php`, contpol);
  }

}
