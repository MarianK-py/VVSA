//using VVSA_dotNET_VSCODE.Model;
using VVSA_dotNET_VSCODE.Repository;
using VVSA_dotNET_VSCODE.ViewModel;
using Transaction = VVSA_dotNET_VSCODE.DatabaseModel.Transaction;

namespace VVSA_dotNET_VSCODE.Serivce;

public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository){
        this.transactionRepository = transactionRepository;
    }

    /*
    public List<Transaction> GetAllTransactions()
    {
        var transactions = transactionRepository.GetAllTransactions();

        return transactions;
    }
    */
    public List<TransactionViewModel> GetAllTransactions()
    {
        
        var transactionsViewModel = new List<TransactionViewModel>();
        var transactions = transactionRepository.GetAllTransactions();
        
        foreach (var transaction in transactions){
            var transactionViewModel = new TransactionViewModel {
                AccountNumber = transaction.AccountNumber,
                Amount = transaction.Amount,
                BankCode = transaction.BankCode,
                FullName = transaction.User.Name,
                IssueDate = transaction.IssueDate,
                TransactionType = transaction.TransactionType.Name
            };

            transactionsViewModel.Add(transactionViewModel);
        }
        return transactionsViewModel;
    }

    /*
    public Transaction GetTransaction(int id)
    {
        var Transaction = transactionRepository.GetTransaction(id);

        return Transaction;
    }
    */

     public TransactionViewModel GetTransaction(int id)
    {
        var transaction = transactionRepository.GetTransaction(id);
        
        var transactionViewModel = new TransactionViewModel {
            AccountNumber = transaction.AccountNumber,
            Amount = transaction.Amount,
            BankCode = transaction.BankCode,
            FullName = transaction.User.Name,
            IssueDate = transaction.IssueDate,
            TransactionType = transaction.TransactionType.Name
        };

        return transactionViewModel;
    }
}