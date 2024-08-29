import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://162.240.174.189:8082/email/send';

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
