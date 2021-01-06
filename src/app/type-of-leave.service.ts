import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeOfLeaveService {

  private baseUrl = 'http://localhost8080/leaves';

  constructor(private http: HttpClient) { }

  getAllTypeOfLeave(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
