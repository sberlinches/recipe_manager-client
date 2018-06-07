import { Item } from "../item/item";
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
   * Removes an specific item from the array.
   * @param {number} key The position in the array where the item is stored
   */
  public removeItem(key: number): void {
    this.ingredients.splice(Number(key), 1);
  }

  /**
   * Adds an instruction to the recipe.
   * @param {string} instruction The step for the recipe
   */
  public addInstruction(instruction: string): void {
    this.instructions.push(instruction);
  }

  /**
   * Removes an specific instruction from the array
   * @param {number} key The position in the array where the instruction is stored
   */
  public removeInstruction(key: number): void {
    this.instructions.splice(Number(key), 1);
  }
}
