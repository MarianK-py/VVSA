using Microsoft.AspNetCore.Mvc;
using VVSA_dotNET_VSCODE.Serivce;
using VVSA_dotNET_VSCODE.ViewModel;

namespace VVSA_dotNET_VSCODE.Controllers;

[ApiController]
[Route("[controller]")]
public class TransactionIdController : ControllerBase
{

    private readonly ITransactionService transactionService;

    public TransactionIdController(ITransactionService data)
    {
        transactionService = data;
    }

    [HttpGet(Name = "GetTransactionById")]
    public TransactionViewModel GetById(int id) 
    {
        return transactionService.GetTransaction(id);
    }

}
