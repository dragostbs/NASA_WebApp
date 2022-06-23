using CosmosApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CosmosApp.Controllers
{
    public class NewsController : Controller
    {
            public IActionResult Index()
            {
                return View();
            }
    }
}
