import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe.class";

@Component({
  selector: 'app-recipe',
  templateUrl: '../views/recipe.component.html',
  styleUrls: ['../assets/recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipes: Recipe[];
  public selected: number;
  public index: number;
  public showRecipeEditComponent: boolean;
  public showRecipeNewComponent: boolean;

  constructor(
    private recipeService: RecipeService
  ) {
    this.showRecipeEditComponent = false;
    this.showRecipeNewComponent = false;
  }

  public ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
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
    this.recipeService.deleteRecipe(index);
  }
}
