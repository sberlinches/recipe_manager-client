import { Item } from "../item/item";
import {Fridge} from "../fridge/fridge";
import {ShoppingList} from "../shoppingList/shoppingList";

export class Recipe {

  private name: string;
  private ingredients: Item[];
  private instructions: string[];
  private estimatedTime: number;

  /**
   * Creates a new recipe object.
   * @param {string} name The name of the recipe
   * @param {string[]} ingredients The ingredients of the recipe
   * @param {string[]} instructions The steps for the recipe
   * @param {number} estimatedTime The estimated time to complete the recipe
   */
  constructor(name: string, ingredients: Item[], instructions: string[], estimatedTime: number) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.estimatedTime = estimatedTime;
  }

  /**
   * Returns the name of the recipe.
   * @returns {string} The name of the recipe
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Returns the ingredients of the recipe.
   * @returns {string[]} The ingredients of the recipe
   */
  public getIngredients(): Item[] {
    return this.ingredients;
  }

  /**
   * Returns the steps for the recipe.
   * @returns {string[]} The steps for the recipe
   */
  public getInstructions(): string[] {
    return this.instructions;
  }

  /**
   * Returns the estimated time to complete the recipe (minutes).
   * @returns {number} The estimated time to complete the recipe (minutes)
   */
  public getEstimatedTime(): number {
    return this.estimatedTime;
  }

  /**
   * Sets the name of the recipe.
   * @param {string} name The name of the recipe
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Sets the ingredients of the recipe.
   * @param {Item[]} ingredients The ingredients of the recipe
   */
  public setIngredients(ingredients: Item[]): void {
    this.ingredients = ingredients;
  }

  /**
   * Sets the steps for the recipe.
   * @param {string[]} instructions The steps for the recipe
   */
  public setInstructions(instructions: string[]): void {
    this.instructions = instructions;
  }

  /**
   * Sets the estimated time to complete the recipe (minutes).
   * @param {number} estimatedTime The estimated time to complete the recipe (minutes)
   */
  public setEstimatedTime(estimatedTime: number): void {
    this.estimatedTime = estimatedTime;
  }

  /**
   * Adds an item to the ingredient list
   * @param {Item} item
   */
  public addItem(item: Item): void {
    this.ingredients.push(item);
  }

  /**
   *
   * @param {number} key
   */
  public removeItem(key: number): void {
    this.ingredients.splice(Number(key), Number(key)+1);
  }

  /**
   * Adds an instruction to the recipe.
   * @param {string} instruction The step for the recipe
   */
  public addInstruction(instruction: string): void {
    this.instructions.push(instruction);
  }

  /**
   *
   * @param {number} key
   */
  public removeInstruction(key: number): void {
    this.instructions.splice(Number(key), Number(key)+1);
  }

  /**
   * Gets the items from the fridge and take note of the items that need to be
   * bought.
   * @param {Fridge} fridge
   * @param {ShoppingList} shoppingList
   */
  public prepareRecipe(fridge: Fridge, shoppingList: ShoppingList): void {

    for (let ingredient of this.ingredients) {

      let isInFridge = false;
      let newItem = new Item(ingredient.getName(), ingredient.getQuantity());

      for (let fridgeItem of fridge.getItems()) {

        // If the item is in the fridge...
        if (ingredient.getName() == fridgeItem.getName()) {

          isInFridge = true;

          // If there's not enough in the fridge
          if (ingredient.getQuantity() > fridgeItem.getQuantity()) {
            newItem.subtract(fridgeItem);
            shoppingList.addItem(newItem);
          }

          break;
        }
      }

      // If the item is not in the fridge, add it to the shopping list
      if(!isInFridge)
        shoppingList.addItem(newItem);

      // Subtract or removes
      fridge.removeItem(ingredient);
    }
  }
}
