import { Injectable } from '@angular/core';
import { RECIPES } from './recipe.mock';
import { Recipe } from './recipe';
import { ShoppingList } from "../shoppingList/shoppingList";
import { Item } from "../item/item";
import { ShoppingListService } from "../shoppingList/shoppingList.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private _shoppingListService: ShoppingListService
  ) { }

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
   * @param {number} servings The number of servings the recipe is prepared
   */
  public deleteRecipe(index: number, servings: number): void {

    // Updates the vales in the shopping list
    for (let item of this.getRecipe(index).getIngredients())
      this._shoppingListService.removeFromShoppingList(item, item.getQuantity()*servings);

    RECIPES.splice(index, 1);
  }

  /**
   * Gets the items from the fridge and take note of the items that need to be
   * bought.
   * @param {Recipe} recipe
   * @param {ShoppingList} shoppingList
   */
  public prepareRecipe(recipe: Recipe, shoppingList: ShoppingList): void {

    /*
    * Once the "prepare recipe" button is clicked:
    * The FridgeList have already a copy of the items in the fridge
    *
    * This function will:
    * Add to the shopping list the items that are not in the fridge, or the
    * ones that are not enough.
    */
    for (let recipeItem of recipe.getIngredients()) {

      let isInFridge = false;

      for (let fridgeItem of shoppingList.getFridgeListItems()) {
        if(fridgeItem.getName() == recipeItem.getName()) {

          isInFridge = true;

          if(recipeItem.getQuantity() > fridgeItem.getQuantity())
            shoppingList.addShoppingListItems(new Item(recipeItem.getName(), recipeItem.getQuantity() - fridgeItem.getQuantity()));

          break;
        }
      }

      // If the item is in the fridge
      if(isInFridge)
        shoppingList.addShoppingListItems(new Item(recipeItem.getName(), 0));
      // If the item is not in the fridge
      else {
        shoppingList.addShoppingListItems(new Item(recipeItem.getName(), recipeItem.getQuantity()));
        shoppingList.addFridgeListItem(new Item(recipeItem.getName(), 0));
      }

      shoppingList.subtractFridgeListItem(recipeItem);
    }
  }
}
