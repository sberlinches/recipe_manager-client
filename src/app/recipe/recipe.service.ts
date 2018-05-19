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
   * Creates a new recipe
   * @param {Recipe} recipe
   */
  public newRecipe(recipe: Recipe): void {
    RECIPES.push(recipe);
  }

  /**
   * Deletes a recipe
   * @param {number} index The index of the recipe
   */
  public deleteRecipe(index: number): void {
    RECIPES.splice(index, index+1);
  }
}
