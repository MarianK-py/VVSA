import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UtilsModule } from '../utils/utils.module';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { BasicAccountsListComponent } from './basic-accounts-list/basic-accounts-list.component';
import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BasicAccountsListComponent, BasicAccountsDetailComponent],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    UtilsModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
})
export class BasicAccountsModule {}
