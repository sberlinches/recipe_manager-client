import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";
import { Item } from "../../item/item";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: '../views/recipe-edit.component.html',
  styleUrls: ['../assets/recipe.component.css']
})
export class RecipeEditComponent implements OnInit {

  @Input() id: number;
  @Output() closeModal = new EventEmitter();
  public _recipe: Recipe;

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.getRecipe(this.id);
  }

  private getRecipe(id: number): void {
    this._recipeService
        .getRecipe(id)
        .subscribe(data => this._recipe = data as Recipe)
  }

  /**
   * Adds an item to the ingredient list
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
  public removeItem(index: number): void {
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
