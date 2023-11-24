import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  ITransaction,
  TransactionsServiceService,
} from 'src/app/api/transactions-service.service';

@Component({
  selector: 'app-basic-accounts-detail',
  templateUrl: './basic-accounts-detail.component.html',
  styleUrls: ['./basic-accounts-detail.component.css'],
})
export class BasicAccountsDetailComponent {
  transactionData?: ITransaction;
  detailForm = new FormGroup({
    accountNum: new FormControl(''),
    amountVal: new FormControl(),
  datePicker: new FormControl()})
  constructor(
    private transactionsService: TransactionsServiceService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const transactionId = params['id'];

      this.transactionsService
        .getTransactionDetail$(transactionId)
        .subscribe((response) => {
          this.transactionData = response;
          console.log(response);
          this.detailForm.setValue({accountNum: response.accountNumber,
            amountVal: response.amount,
            datePicker: response.issueDate})

        });
    });
    
  }
  
}
