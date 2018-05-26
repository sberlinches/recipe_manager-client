import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { Recipe } from "../../a1/recipe.class";
import { Item } from "../../a1/item.class";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: '../views/recipe-edit.component.html',
  styleUrls: ['../assets/recipe.component.css']
})
export class RecipeEditComponent implements OnInit {

  @Input() index: number;
  @Output() closeModal = new EventEmitter();
  public recipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.index);
  }

  /**
   * Adds an item to the ingredient list
   * @param name The name of the item
   * @param quantity The amount of the item
   */
  public addIngredient(name, quantity): void {

    if(name.value != '' && quantity.value != '') {
      this.recipe.addItem(new Item(name.value, quantity.value));
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
    this.recipe.removeItem(index);
  }

  /**
   * Adds an instruction to the recipe.
   * @param instruction The step for the recipe
   */
  public addInstruction(instruction): void {

    if(instruction.value != '') {
      this.recipe.addInstruction(instruction.value);
      //Empty the input
      instruction.value = null;
    }
  }

  /**
   * Deletes an instruction from the recipe.
   * @param {number} index
   */
  public deleteInstruction(index: number): void {
    this.recipe.removeInstruction(index);
  }

  /**
   * Submits the form
   * @param form
   */
  public onSubmit(form) {
    if(form.valid)
      this.recipeService.editRecipe(this.index, this.recipe);
  }

  /**
   * Closes the modal
   */
  public cancel() {
    this.closeModal.emit();
  }

  /**
   *
   * @param {number} index
   * @param {Recipe} recipe
   * @returns {any}
   */
  public trackRecipe(index: number, recipe: Recipe): number {
    return index;
  }
}
