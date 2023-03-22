using System.Text.Json.Serialization;
using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("recipeConnectionString") ?? throw new InvalidOperationException("Connection string 'recipeConnectionString' not found.")));

builder.Services.AddControllers().AddJsonOptions(x=> x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//var _recipeConnectionString = builder.Configuration["RecipeConnectionString"];


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(opt =>
    {
        opt.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
}
if (app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(opt =>
    {
        opt.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
}
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();