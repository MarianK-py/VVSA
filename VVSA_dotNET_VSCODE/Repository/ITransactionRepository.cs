//using VVSA_dotNET_VSCODE.Model;
using Transaction = VVSA_dotNET_VSCODE.DatabaseModel.Transaction;

namespace VVSA_dotNET_VSCODE.Repository;

public interface ITransactionRepository
{
    List<Transaction> GetAllTransactions();

    Transaction GetTransaction(int id);
}
