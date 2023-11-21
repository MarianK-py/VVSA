import { Component } from '@angular/core';
import {
  ITransaction,
  TransactionsServiceService,
} from 'src/app/api/transactions-service.service';

@Component({
  selector: 'app-basic-accounts-list',
  templateUrl: './basic-accounts-list.component.html',
  styleUrls: ['./basic-accounts-list.component.css'],
})
export class BasicAccountsListComponent {
  transactionList: ITransaction[] = [];
  displayedColumns: string[] = ['name', 'type', 'account', 'amount', 'action'];

  constructor(private transactionsService: TransactionsServiceService) {
    this.transactionsService.getTransactions$().subscribe((response) => {
      this.transactionList = response;
    });
  }
}
