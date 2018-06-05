import { Item } from "../item/item";

export class ShoppingList {

  private items: Item[];

  /**
   * Creates an shopping list
   */
  constructor() {
    this.items = [];
  }

  /**
   * Gets the items array of the shopping list.
   * @returns {Item[]} the items array
   */
  public getItems(): Item[] {
    return this.items;
  }

  /**
   * Adds an item to the shopping list. If the item exists updates the quantity.
   * @param {Item} item The item to be added
   */
  public addItem(item: Item): void {

    // If the item exists, add the quantity
    for (let listItem of this.items) {
      if(item.getName() == listItem.getName()) {
        listItem.add(item);
        return;
      }
    }

    this.items.push(item);
  }
}
