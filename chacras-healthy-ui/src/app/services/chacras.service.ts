import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChacrasService {
  private apiUrl = 'http://localhost:8080/chacras';

  constructor(private http: HttpClient) {}

  getAllChacras(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getChacraById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getChacrasByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }
  deleteChacraById(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
  updateChacraById(id: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/chacras/${id}`, updatedData);
  }
  
  createChacra(newChacra: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/chacras/add', newChacra);
  }
  
}
