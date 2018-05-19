import { Component, OnInit } from '@angular/core';

import { RecipeService } from "../recipe.service";
import { Recipe } from "../../a1/recipe.class";

@Component({
  selector: 'app-recipe',
  templateUrl: '../views/recipe.component.html',
  styleUrls: ['../assets/recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { }

  public ngOnInit() {
    this.getRecipes();
  }

  /**
   *
   */
  private getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  public showDetails(): void {}
  public newRecipe(): void {}
  public editRecipe(): void {}

  /**
   * Deletes a recipe
   * @param index The index of the recipe
   */
  public deleteRecipe(index): void {
    this.recipeService.deleteRecipe(index);
  }
}
