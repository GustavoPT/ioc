import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkManagerService {
  private baseUrl: string = 'https://api.example.com'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Generic GET method
  public get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params });
  }

  // Generic POST method
  public post<T>(
    endpoint: string,
    body: any,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, { headers });
  }

  // Generic PUT method
  public put<T>(
    endpoint: string,
    body: any,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, { headers });
  }

  // Generic DELETE method
  public delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, { params });
  }

  // Example of a custom request for login
  public login(username: string, password: string): Observable<any> {
    const endpoint = 'auth/login';
    const body = { username, password };
    return this.post(endpoint, body);
  }
}
