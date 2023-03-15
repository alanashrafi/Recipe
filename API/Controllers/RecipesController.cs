using API.Data;
using API.Models;
using API.Models.Dto;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/recipes/")]
public class RecipesController : ControllerBase
{
    private readonly AppDbContext _context;

    public RecipesController(AppDbContext _context)
    {
        this._context = _context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Recipe>> GetRecipes()
    {
       return _context.Recipes.ToList();
    }
    
    [HttpGet("{id}")]
    public ActionResult<Recipe> GetRecipeById(int id)
    {
        var recipe = _context.Recipes.Find(id);
        if (recipe == null)
        {
            return NotFound();
        }

        return recipe;
    }

    [HttpPost]
    public  IActionResult AddRecipe(RecipeDto recipeDto)
    {
      
        try
        {
            var newRecipe = new Recipe()
            {
                Name = recipeDto.Name,
                Summary = recipeDto.Summary,
                Portion = recipeDto.Portion,
                Time = recipeDto.Time,
                Category = recipeDto.Category,
                Method = recipeDto.Method
            };
            _context.Recipes.Add(newRecipe);
            _context.SaveChanges();
            return Ok();
        }
        catch (Exception e)
        {
            throw e; 
        }
        
    }
    
}