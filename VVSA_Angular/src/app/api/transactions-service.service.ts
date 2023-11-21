import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ITransaction {
  transactionId: number;
  fullName: string;
  transactionType: number;
  accountNumber: string;
  bankCode: string;
  issueDate: Date;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionsServiceService {
  constructor(private httpClient: HttpClient) {}

  /*
  getTransactions$(): Observable<{ data: ITransaction[] }> {
    return this.httpClient.get<{ data: ITransaction[] }>('/api/transactions');
  }
  */
  getTransactions$(): Observable<ITransaction[]> {
    console.log(this.httpClient.get<ITransaction[]>('/Transaction'));
    return this.httpClient.get<ITransaction[]>('/Transaction');
  }

  getTransactionDetail$(id: string): Observable<{ data: ITransaction }> {
    return this.httpClient.get<{ data: ITransaction }>(
      `/api/transactions/${id}`
    );
  }
}
