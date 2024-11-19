using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Linq;

namespace Progetto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextController : ControllerBase
    {
        private readonly string _messagesFilePath;

        public TextController(IConfiguration configuration)
        {
            _messagesFilePath = configuration["FileSettings:MessagesFilePath"] ?? throw new ArgumentNullException("File path cannot be null");
        }

        [HttpGet("{id}")]
        public IActionResult GetTextById(int id)
        {
            // Log per debug
            Console.WriteLine($"Richiesta di testo per ID {id}");

            if (!System.IO.File.Exists(_messagesFilePath))
            {
                Console.WriteLine("File non trovato");
                return NotFound("File non trovato.");
            }

            var lines = System.IO.File.ReadAllLines(_messagesFilePath);
            var line = lines.FirstOrDefault(l => l.StartsWith(id + ","));

            if (line != null)
            {
                var text = line.Split(',')[1].Trim();
                Console.WriteLine($"Testo trovato per ID {id}: {text}");
                return Ok(new { text });
            }

            Console.WriteLine("ID non trovato nel file");
            return NotFound("ID non trovato.");
        }
    }
}