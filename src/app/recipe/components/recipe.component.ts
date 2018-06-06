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

  public recipes: Recipe[];
  public _showContent: boolean;
  public selected: number;
  public index: number;
  public showRecipeEditComponent: boolean;
  public showRecipeNewComponent: boolean;
  public _prepareRecipe: number[];

  constructor(
    private _recipeService: RecipeService,
    private _fridgeService: FridgeService,
    private _shoppingListService: ShoppingListService,
  ) {
    this._showContent = true;
    this.showRecipeEditComponent = false;
    this.showRecipeNewComponent = false;
    this._prepareRecipe = [];
  }

  public ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipes = this._recipeService.getRecipes();
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

  public editRecipe(index: number): void {
    this.index = index;
    this.showRecipeEditComponent = true;
  }

  public deleteRecipe(index): void {
    this._recipeService.deleteRecipe(index);
  }

  public prepareRecipe(index): void {
    this._recipeService.prepareRecipe(
      this._recipeService.getRecipe(index),
      this._shoppingListService.getShoppingList()
    );

    // Increment the count
    if(this._prepareRecipe[index])
      this._prepareRecipe[index]++;
    else
      this._prepareRecipe[index] = 1;
  }
}
