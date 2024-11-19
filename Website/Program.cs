using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.FileProviders;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Aggiungi i servizi necessari
builder.Services.AddRazorPages();  // Se hai Razor Pages, altrimenti può essere rimosso

var app = builder.Build();

// Usa i file statici dalla cartella wwwroot
app.UseStaticFiles();  // Serve i file statici dalla cartella wwwroot

// Se il tuo file index.html si trova in un'altra cartella come 'Website/wwwroot', puoi configurare così
// Se i tuoi file statici si trovano in un'altra cartella, aggiungi la configurazione per quella cartella
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
    RequestPath = ""
});

void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", builder =>
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader());
    });
}

void Configure(IApplicationBuilder app)
{
    app.UseCors("AllowAll");  // Aggiungi questa riga per abilitare CORS
    // altre configurazioni...
}

// Configura la pipeline di richieste HTTP
app.UseRouting();

// Mappa le Razor Pages se necessario (puoi rimuoverlo se non le usi)
app.MapRazorPages();

// Avvia l'applicazione sulla porta 5500
app.Run("http://127.0.0.1:5500");  // Configura la porta su 5500
