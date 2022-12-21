import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8081/employee/all";
  private saveURL = "http://localhost:8081/employee/register";
  private searchURL = "http://localhost:8081/employee/search";
  private updateURL = "http://localhost:8081/employee/update";
  private deleteURL = "http://localhost:8081/employee/delete";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.saveURL}`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.searchURL}/${id}`);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }
}
