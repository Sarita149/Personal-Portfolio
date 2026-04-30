import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MapComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
