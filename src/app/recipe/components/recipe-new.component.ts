import { Component, OnInit } from '@angular/core';

import { RecipeService } from "../recipe.service";
import { Recipe } from "../../a1/recipe.class";

@Component({
  selector: 'app-recipe-new',
  templateUrl: '../views/recipe-new.component.html',
  styleUrls: ['../assets/recipe.component.css']
})
export class RecipeNewComponent implements OnInit {

  public recipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipe = new Recipe('',[],[],0);
  }

  /**
   *
   * @param form
   */
  onSubmit(form) {
    console.log(form);
    console.log(this.recipe);
    if(form.valid)
      this.recipeService.newRecipe(this.recipe);
  }

}
