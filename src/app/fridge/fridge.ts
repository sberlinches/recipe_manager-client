import { Item } from "../item/item";
import { Recipe } from "../recipe/recipe";

export class Fridge {

  private items: Item[];

  /**
   * Creates an empty fridge
   */
  constructor() {
    this.items = [];
  }

  /**
   * Returns the items of the fridge.
   * @returns {Item[]} The contents of the fridge.
   */
  public getItems(): Item[] {
    return this.items;
  }

  /**
   * Returns an item from the fridge.
   * @param {number} index
   * @returns {Item}
   */
  public getItem(index: number): Item {
    return this.items[index];
  }

  /**
   * Adds an item to the shopping list. If the item exists updates the quantity.
   * @param {Item} item The item to be added
   */
  public addItem(item: Item): void {

    for (let fridgeItem of this.items) {
      if(item.getName() == fridgeItem.getName()) {
        // If the item exists, add the quantity
        fridgeItem.add(item);
        return;
      }
    }

    this.items.push(item);
  }

  /**
   * Removes the specified amount of the item from the fridge, if the amount
   * falls below zero, removes the item completely from the fridge.
   * @param {Item} item The item to be removed
   */
  public removeItem(item: Item): void {

    for (let key in this.items) {

      let fridgeItem = this.items[Number(key)];

      if(item.getName() == fridgeItem.getName()) {
        // Subtract the item from the fridge
        fridgeItem.subtract(item);
        // If the quantity reach zero, remove the item from the list
        if(fridgeItem.getQuantity() <= 0) {
          this.items.splice(Number(key), 1);
          return;
        }
      }
    }
  }

  /**
   * Given a recipe, check what ingredient are already in the fridge. This method
   * returns a two list. A shopping list, on what needs to be bought, and a list
   * of what is already in the fridge. Note if an item can be on both list, if
   * there is not enough of it in a fridge.
   * @param {Recipe} recipe
   * @returns {{[p: string]: Item[]}}
   */
  public checkRecipe(recipe: Recipe): {[name: string]: Item[]} {

    let list: { [name: string]: Item[]; } = {
      shopping: [],
      fridge: []
    };

    for (let recipeItem of recipe.getIngredients()) {

      let isInFridge = false;

      for (let fridgeItem of this.items) {

        // If the item is in the fridge...
        if (recipeItem.getName() == fridgeItem.getName()) {

          // ... and there's not enough quantity, add it to both lists
          if (recipeItem.getQuantity() > fridgeItem.getQuantity()) {
            list.fridge.push(fridgeItem);
            list.shopping.push(new Item(recipeItem.getName(), recipeItem.getQuantity()- fridgeItem.getQuantity()));
          }
          // ...and there's enough quantity, add it to the "fridge list"
          else list.fridge.push(fridgeItem);

          isInFridge = true;
          break;
        }
      }

      // If the item is not in the fridge, add it to the "shopping list"
      if(!isInFridge) list.shopping.push(recipeItem);
    }

    return list;
  }
}
