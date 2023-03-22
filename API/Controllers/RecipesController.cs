using API.Data;
using API.Models;
using API.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
    {
        if(_context.Recipes == null) {
            return NotFound();
        }
        return await _context.Recipes.ToListAsync();
       
 
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipeById(int id)
    {
        var recipe = await _context.Recipes.FindAsync(id);
        if (recipe == null)
        {
            return NotFound();
        }
        return recipe;
    }

    [HttpPost]
    public async Task<IActionResult> AddRecipe(RecipeDto recipeDto)
    {
        try
        {
            var newRecipe = new Recipe()
            {
                Name = recipeDto.Name,
                Summary = recipeDto.Summary,
                Portion = recipeDto.Portion,
                Time = recipeDto.Time,
                ImageUrl = recipeDto.ImageUrl,
                Category = recipeDto.Category,
                Method = recipeDto.Method
            };
            await _context.Recipes.AddAsync(newRecipe);
            await _context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception e)
        {
            throw e; 
        }
    }

    [HttpPut("{id}/edit")]
    public async Task<IActionResult> EditRecipe(int id,RecipeDto recipeDto)
    {
        var recipe = _context.Recipes.Find(id);
        recipe.Name = recipeDto.Name;
        recipe.Summary = recipeDto.Summary;
        recipe.Portion = recipeDto.Portion;
        recipe.Time = recipeDto.Time;
        recipe.Category = recipeDto.Category;
        recipe.Method = recipeDto.Method;
        recipe.ImageUrl = recipeDto.ImageUrl;
        _context.Update(recipe);
        await _context.SaveChangesAsync();
        return Ok(recipe);
            
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRecipe(int id)
    {
        _context.Remove(_context.Recipes.Single(x => x.Id == id));
        await _context.SaveChangesAsync();
        return Ok();
    }
    
    
}