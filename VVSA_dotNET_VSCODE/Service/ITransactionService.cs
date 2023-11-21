//using VVSA_dotNET_VSCODE.Model;
using VVSA_dotNET_VSCODE.ViewModel;
using Transaction = VVSA_dotNET_VSCODE.DatabaseModel.Transaction;

namespace VVSA_dotNET_VSCODE.Serivce;

public interface ITransactionService
{
    //List<Transaction> GetAllTransactions();
    List<TransactionViewModel> GetAllTransactions();

    //Transaction GetTransaction(int id);
    TransactionViewModel GetTransaction(int id);
}