import { Item } from "../item/item.class";
import { Recipe } from "../recipe/recipe.class";

export class Fridge {

  private contents: Item[];

  /**
   * Creates an empty fridge
   */
  constructor() {
    this.contents = [];
  }

  /**
   * Returns the contents of the fridge.
   * @returns {Item[]} The contents of the fridge.
   */
  public getContents(): Item[] {
    return this.contents;
  }

  /**
   * Adds the specified amount of an item to the fridge.
   * If a similar item already exists, add to it's quantity if it does not, add
   * the item.
   * @param {Item} item
   */
  public add(item: Item): void {

    // If the item exists, add the quantity
    for (let content of this.contents) {
      if(item.getName() == content.getName()) {
        content.add(item);
        return;
      }
    }

    this.contents.push(item);
  }

  /**
   * Remove the specified amount of the item from the fridge, if the amount
   * falls below zero, remove the item completely
   * from the fridge.
   * @param {Item} item
   */
  public remove(item: Item): void {

    for (let key in this.contents) {

      let content = this.contents[Number(key)];

      if(item.getName() == content.getName()) {
        content.subtract(item);
        if(content.getQuantity() <= 0)
          this.contents.splice(Number(key), Number(key)+1);
      }
    }
  }

  /**
   * Give a recipe, check what ingredient are already in the fridge. This method
   * returns a two list. A shopping list, on what needs to be bought, and a list
   * of what is already in the fridge. Note if an item can be on both list, if
   * there is not enough of it in a fridge.
   */
  public checkRecipe(recipe: Recipe): any {

    let list: { [listName: string]: Item[]; } = {
      'shoppingList': [],
      'fridgeList': []
    };

    for (let recipeItem of recipe.getIngredients()) {

      let isInFridge = false;

      for (let fridgeItem of this.contents) {

        // If the item is in the fridge...
        if (recipeItem.getName() == fridgeItem.getName()) {

          // ... and there's not enough quantity, add it to both lists
          if (recipeItem.getQuantity() > fridgeItem.getQuantity()) {
            list.fridgeList.push(fridgeItem);
            list.shoppingList.push(new Item(recipeItem.getName(), recipeItem.getQuantity()- fridgeItem.getQuantity()));
          }
          // ...and there's enough quantity, add it to the "fridge list"
          else list.fridgeList.push(fridgeItem);

          isInFridge = true;
          break;
        }
      }

      // If the item is not in the fridge, add it to the "shopping list"
      if(!isInFridge) list.shoppingList.push(recipeItem);
    }

    return list;
  }
}
