import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UtilsModule } from '../utils/utils.module';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { BasicDetailComponent } from './basic-accounts-detail/basic-detail/basic-detail.component';
import { WithdrawalDetailComponent } from './basic-accounts-detail/withdrawal-detail/withdrawal-detail.component';
import { BasicAccountsListComponent } from './basic-accounts-list/basic-accounts-list.component';
import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    BasicAccountsListComponent,
    BasicAccountsDetailComponent,
    BasicDetailComponent,
    WithdrawalDetailComponent
    
  ],
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
