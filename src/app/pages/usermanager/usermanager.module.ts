import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagerRoutingModule } from './usermanager-routing.module';
import { UsermanagerComponent } from './usermanager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UsermanagerComponent],
  imports: [
    CommonModule,
    UsermanagerRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class UsermanagerModule { }
