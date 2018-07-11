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

  @Input() _id: string;
  @Output() closeModal = new EventEmitter();
  public _recipe: Recipe;

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.getRecipe(this._id);
  }

  private getRecipe(id: string): void {
    this._recipeService
        .getRecipe(id)
        .then(data => {this._recipe = data as Recipe}) //Promises
        //.subscribe(data => this._recipe = data as Recipe) //Observables
  }

  /**
   * Adds an item to the ingredient list
   * @param name The name of the item
   * @param quantity The amount of the item
   */
  public addIngredient(name, quantity): void {

    if(name.value != '' && quantity.value != '') {
      this._recipe.items.push(new Item(name.value, quantity.value));
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
    this._recipe.items.splice(index, 1);
  }

  /**
   * Adds an instruction to the recipe.
   * @param instruction The step for the recipe
   */
  public addInstruction(instruction): void {

    if(instruction.value != '') {
      this._recipe.instructions.push(instruction.value);
      //Empty the input
      instruction.value = null;
    }
  }

  /**
   * Deletes an instruction from the recipe.
   * @param {number} index
   */
  public deleteInstruction(index: number): void {
    this._recipe.instructions.splice(index, 1);
  }

  /**
   *
   * @param form
   */
  onSubmit(form) {

    if(form.valid) {
      this._recipeService
          .editRecipe(this._recipe)
          .then(data => { //Promises
          //.subscribe(data => { //Observables
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
