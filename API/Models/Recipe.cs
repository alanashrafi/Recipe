using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Recipe
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Summary { get; set; }
    public string Portion { get; set; }
    public string Time { get; set; }
    public string Category { get; set; }
    public string Method { get; set; }
}