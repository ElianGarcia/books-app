import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/models/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard : Dashboard = new Dashboard();
  
  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe(dashboard => {
      this.dashboard = dashboard;
    });
  }

}
