import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { Observable } from 'rxjs';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient : HttpClient) { }

  getDashboard() {
    return this.httpClient.get<Dashboard>(Endpoints.GET_DASHBOARD);
  }
}
