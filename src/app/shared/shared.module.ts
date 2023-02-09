import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ErrorPageComponent,
    DialogComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }