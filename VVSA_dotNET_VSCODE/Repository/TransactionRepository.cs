using VVSA_dotNET_VSCODE.Repository;
//using VVSA_dotNET_VSCODE.Model;
using VVSA_dotNET_VSCODE.DatabaseModel;
using Transaction = VVSA_dotNET_VSCODE.DatabaseModel.Transaction;
using Microsoft.EntityFrameworkCore;

public class TransactionRepository : ITransactionRepository
{
    private List<Transaction> transactions;

    private readonly Whiyes5oContext context;
    public TransactionRepository(Whiyes5oContext context){
        this.context = context;
        /*this.transactions = new List<Transaction>{
            new Transaction {
                TransactionId = 1,
                FullName = "HELP"
            },
            new Transaction {
                TransactionId = 2,
                FullName = "ME",
            }
        };*/
    }

    public List<Transaction> GetAllTransactions()
    {
        return this.context.Transactions.Include(p => p.User).Include(p => p.TransactionType).ToList();
    }


    public Transaction GetTransaction(int id)
    {
        return this.context.Transactions.Include(p => p.User).Include(p => p.TransactionType).FirstOrDefault(p => p.Id == id);
    }

}