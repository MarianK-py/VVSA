using Microsoft.AspNetCore.Mvc;
using VVSA_dotNET_VSCODE.Serivce;
using VVSA_dotNET_VSCODE.ViewModel;
using Transaction = VVSA_dotNET_VSCODE.DatabaseModel.Transaction;

namespace VVSA_dotNET_VSCODE.Controllers;

[ApiController]
[Route("[controller]")]
public class TransactionController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    private readonly ITransactionService transactionService;


    public TransactionController(ITransactionService logger)
    {
        transactionService = logger;
    }

    [HttpGet(Name = "GetTransaction")]
    public List<TransactionViewModel> Get()
    {
        return transactionService.GetAllTransactions();
    }
}
