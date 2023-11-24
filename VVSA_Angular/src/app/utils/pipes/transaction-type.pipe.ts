import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType',
})
export class TransactionTypePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      //case 0:
      //  return 'DEBIT transaction';
      case 1:
        return 'Incoming'//'ATM withdrawal';
      case 2:
        return 'Outgoing';
      default:
        return 'Unknown';
    }
  }
}
