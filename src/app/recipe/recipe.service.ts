import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from './recipe';
import { ShoppingList } from "../shoppingList/shoppingList";
import { Item } from "../item/item";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Gets all recipes
   * @returns {Observable<object>}
   */
  getRecipes(): Observable<object> {
    return this.httpClient
        .get('http://localhost:8080/api/recipe/');
  }

  /**
   * Gets a recipe.
   * @param {number} id The recipe ID
   * @returns {Observable<object>}
   */
  getRecipe(id: number): Observable<object> {
    //const params = new HttpParams().set('id', id);
    return this.httpClient
        .get('http://localhost:8080/api/recipe/' + id); //TODO: Angular 6 has this parameters thing messed. Old school style
  }

  /**
   * Creates a new recipe.
   * @param {Recipe} recipe The recipe object
   * @returns {Observable<object>}
   */
  public newRecipe(recipe: Recipe): Observable<object> {
    return this.httpClient
        .post('http://localhost:8080/api/recipe/', recipe);
  }

  /**
   * Edits a recipe.
   * @param {Recipe} recipe The recipe object
   * @returns {Observable<object>}
   */
  public editRecipe(recipe: Recipe): Observable<object> {
    return this.httpClient
        .patch('http://localhost:8080/api/recipe/' + recipe.id, recipe);
  }

  /**
   * Deletes a recipe.
   * @param {number} index The index of the recipe in the array
   */
  public deleteRecipe(id: number): Observable<object> {
    return this.httpClient
        .delete('http://localhost:8080/api/recipe/' + id);
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
    for (let recipeItem of recipe.items) {

      let isInFridge = false;

      for (let fridgeItem of shoppingList.getFridgeListItems()) {
        if(fridgeItem.name == recipeItem.name) {

          isInFridge = true;

          if(recipeItem.quantity > fridgeItem.quantity)
            shoppingList.addShoppingListItems(new Item(recipeItem.name, recipeItem.quantity - fridgeItem.quantity));

          break;
        }
      }

      // If the item is in the fridge
      if(isInFridge)
        shoppingList.addShoppingListItems(new Item(recipeItem.name, 0));
      // If the item is not in the fridge
      else {
        shoppingList.addShoppingListItems(new Item(recipeItem.name, recipeItem.quantity));
        shoppingList.addFridgeListItem(new Item(recipeItem.name, 0));
      }

      shoppingList.subtractFridgeListItem(recipeItem);
    }
  }
}
