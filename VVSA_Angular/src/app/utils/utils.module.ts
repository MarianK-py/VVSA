import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionTypePipe } from './pipes/transaction-type.pipe';

@NgModule({
  declarations: [TransactionTypePipe],
  imports: [CommonModule],
  exports: [TransactionTypePipe],
})
export class UtilsModule {}
