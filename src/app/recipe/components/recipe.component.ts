import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { FridgeService } from "../../fridge/fridge.service";
import { ShoppingListService } from "../../shoppingList/shoppingList.service";
import { Recipe } from "../recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: '../views/recipe.component.html',
  styleUrls: ['../assets/recipe.component.css'],
  providers: [
    FridgeService,
    ShoppingListService
  ]
})
export class RecipeComponent implements OnInit {

  public _recipes: Recipe[];
  public _showContent: boolean;
  public selected: number;
  public id: number;
  public showRecipeEditComponent: boolean;
  public showRecipeNewComponent: boolean;
  public _prepareRecipe: number[];

  constructor(
    private _recipeService: RecipeService,
    private _fridgeService: FridgeService,
    private _shoppingListService: ShoppingListService,
  ) {
    this._recipes = [];
    this._showContent = true;
    this.showRecipeEditComponent = false;
    this.showRecipeNewComponent = false;
    this._prepareRecipe = []; //Stores the number of servings per recipe
  }

  public ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this._recipeService
        .getRecipes()
        .subscribe(data => this._recipes = data as Recipe[]);
  }

  public showContent() {
    this._showContent = (!this._showContent);
  }

  public showDetails(index: number): void {
    this.selected = (this.selected == index)? null: index;
  }

  public newRecipe(): void {
    this.showRecipeNewComponent = true;
  }

  public editRecipe(id: number): void {
    this.id = id;
    this.showRecipeEditComponent = true;
  }

  public deleteRecipe(id: number, index: number): void {

    this._recipeService
        .deleteRecipe(id)
        .subscribe(data => {
          // If data is true(1), the recipe was deleted
          if(data) {
            this.getRecipes(); //TODO: This should delete the object from the current list, not requesting the recipe list again

            // Updates the vales in the shopping list
            for (let item of this._recipes[index].items)
              this._shoppingListService.removeFromShoppingList(item, item.quantity * this._prepareRecipe[index]);

            this._prepareRecipe[index] = 0;
          }
        });
  }

  /**
   * Prepares a recipe.
   * Take note of the items that are needed to buy and the ones that are left in the fridge
   * @param {number} index
   */
  public prepareRecipe(index: number): void {
    this._recipeService.prepareRecipe(
      this._recipes[index],
      this._shoppingListService.getShoppingList()
    );

    // Increment the count
    if(!this._prepareRecipe[index])
      this._prepareRecipe[index] = 0;

    this._prepareRecipe[index]++;
  }
}
