import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";
import { Item } from "../../item/item";

@Component({
  selector: 'app-recipe-new',
  templateUrl: '../views/recipe-new.component.html',
  styleUrls: ['../assets/recipe.component.css']
})
export class RecipeNewComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  public _recipe: Recipe;

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this._recipe = new Recipe('',[],[],0);
  }

  /**
   * Adds an item to the recipe
   * @param name The name of the item
   * @param quantity The amount of the item
   */
  public addIngredient(name, quantity): void {

    if(name.value != '' && quantity.value != '') {
      this._recipe.addItem(new Item(name.value, quantity.value));
      // Empty the inputs
      name.value = '';
      quantity.value = '';
    }
  }

  /**
   * Deletes an ingredient from the recipe.
   * @param {number} index
   */
  public deleteIngredient(index: number): void {
    this._recipe.removeItem(index);
  }

  /**
   * Adds an instruction to the recipe.
   * @param instruction The step for the recipe
   */
  public addInstruction(instruction): void {

    if(instruction.value != '') {
      this._recipe.addInstruction(instruction.value);
      //Empty the input
      instruction.value = null;
    }
  }

  /**
   * Deletes an instruction from the recipe.
   * @param {number} index
   */
  public deleteInstruction(index: number): void {
    this._recipe.removeInstruction(index);
  }

  /**
   *
   * @param form
   */
  onSubmit(form) {
    if(form.valid) {

      this._recipeService
          .newRecipe(this._recipe)
          .subscribe(data => {
            // If data is true(1), the recipe was created
            if(data) {
              this.closeModal.emit(); //TODO: close modal is going to call getRecipes(). Needless to say that it could be improved...
            }
          });
    }
  }

  /**
   * Closes the modal
   */
  public cancel() {
    this.closeModal.emit();
  }
}
