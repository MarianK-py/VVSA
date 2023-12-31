using Microsoft.AspNetCore.Mvc;
using VVSA_dotNET_VSCODE.Serivce;
using VVSA_dotNET_VSCODE.ViewModel;

namespace VVSA_dotNET_VSCODE.Controllers;

[ApiController]
[Route("[controller]")]
public class TransactionController : ControllerBase
{

    private readonly ITransactionService transactionService;

    public TransactionController(ITransactionService data)
    {
        transactionService = data;
    }

    [HttpGet(Name = "GetTransaction")]
    public List<TransactionViewModel> Get()
    {
        return transactionService.GetAllTransactions();
    }

}
