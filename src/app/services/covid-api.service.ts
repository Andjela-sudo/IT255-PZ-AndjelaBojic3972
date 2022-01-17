import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  private status: Observable<Object>;
  private url: string = 'https://api.covid19api.com/summary';

  constructor(private http: HttpClient) { 
   
  }

  public getStatus(): Observable<Object>{
    this.status = this.http.get(this.url);
    return this.status;
  }
}
