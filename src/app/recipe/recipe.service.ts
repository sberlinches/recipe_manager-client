import { Injectable } from '@angular/core';
import { RECIPES } from './recipe.mock';
import { Recipe } from './recipe';
import {Fridge} from "../fridge/fridge";
import {ShoppingList} from "../shoppingList/shoppingList";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  /**
   * Gets the recipes.
   * @returns {Recipe[]} The recipe object
   */
  public getRecipes(): Recipe[] {
    return RECIPES;
  }

  /**
   * Gets a recipe.
   * @param {number} index The index of the recipe in the array
   * @returns {Recipe}
   */
  public getRecipe(index: number): Recipe {
    return RECIPES[index];
  }

  /**
   * Creates a new recipe.
   * @param {Recipe} recipe
   */
  public newRecipe(recipe: Recipe): void {
    RECIPES.push(recipe);
  }

  /**
   * Edits a recipe.
   * @param {number} index The index of the recipe in the array
   * @param {Recipe} recipe
   */
  public editRecipe(index: number, recipe: Recipe): void {
    RECIPES[index] = recipe;
  }

  /**
   * Deletes a recipe.
   * @param {number} index The index of the recipe in the array
   */
  public deleteRecipe(index: number): void {
    RECIPES.splice(index, index+1);
  }

  /**
   *
   * @param {Recipe} recipe
   * @param {ShoppingList} shoppingList
   */
  public prepareRecipe(recipe: Recipe, shoppingList: ShoppingList): void {
    recipe.prepareRecipe(shoppingList);
  }
}
