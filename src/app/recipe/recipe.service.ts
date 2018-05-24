import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/a1/recipe.class';
import { RECIPES } from './recipe.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  /**
   * Gets all recipes
   * @returns {Recipe[]}
   */
  public getRecipes(): Recipe[] {
    return RECIPES;
  }

  /**
   * Gets a recipe
   * @param {number} index The index of the recipe in the array
   * @returns {Recipe}
   */
  public getRecipe(index: number): Recipe {
    return RECIPES[index];
  }

  /**
   * Creates a new recipe
   * @param {Recipe} recipe
   */
  public newRecipe(recipe: Recipe): void {
    RECIPES.push(recipe);
  }

  /**
   * Edits a recipe
   * @param {number} index The index of the recipe in the array
   * @param {Recipe} recipe
   */
  public editRecipe(index: number, recipe: Recipe): void {
    RECIPES[index] = recipe;
  }

  /**
   * Deletes a recipe
   * @param {number} index The index of the recipe in the array
   */
  public deleteRecipe(index: number): void {
    RECIPES.splice(index, index+1);
  }
}
