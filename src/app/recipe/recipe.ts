import { Item } from "../item/item";

export class Recipe {

  public id: number;
  public name: string;
  public items: Item[];
  public instructions: string[];
  public estimatedTime: number;

  /**
   * Creates a new recipe object.
   * @param {string} name The name of the recipe
   * @param {string[]} items The ingredients of the recipe
   * @param {string[]} instructions The steps for the recipe
   * @param {number} estimatedTime The estimated time to complete the recipe
   */
  constructor(name: string, items: Item[], instructions: string[], estimatedTime: number) {
    this.name = name;
    this.items = items;
    this.instructions = instructions;
    this.estimatedTime = estimatedTime;
  }

  /**
   * Adds an item to the ingredient list
   * @param {Item} item
   */
  public addItem(item: Item): void {
    this.items.push(item);
  }

  /**
   * Removes an specific item from the array.
   * @param {number} key The position in the array where the item is stored
   */
  public removeItem(key: number): void {
    this.items.splice(Number(key), 1);
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
