using Microsoft.AspNetCore.Mvc;

namespace netcoreredux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : Controller
    {
        [HttpGet("{id}")]
        public IActionResult Get(int id) 
        {
            return Json(new {
                FirstName = "First name",
                LastName ="Last Name",
                Email = "test@gmail.com"
            });
        }

        
    }
}