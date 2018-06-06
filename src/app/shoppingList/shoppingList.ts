import { Item } from "../item/item";

export class ShoppingList {

  private _shoppingListItems: Item[];
  private _fridgeListItems: Item[];

  /**
   * Creates a shopping and frige list
   */
  constructor() {
    this._shoppingListItems = [];
    this._fridgeListItems = [];
  }

  /**
   * Gets the items from the shopping list.
   * @returns {Item[]} the items in the shopping list
   */
  public getShoppingListItems(): Item[] {
    return this._shoppingListItems;
  }

  /**
   * Gets the items from the fridge list.
   * @returns {Item[]} The items in the fridge list
   */
  public getFridgeListItems(): Item[] {
    return this._fridgeListItems;
  }

  /**
   *
   * @param {Item} item
   * @returns {number}
   */
  public getFridgeItemQuantityByItem(item: Item): number {

    for (let fridgeItem of this._fridgeListItems) {
      if(fridgeItem.getName() == item.getName())
        return fridgeItem.getQuantity();
    }

    return 0;
  }

  /**
   * Adds an item to the shopping list. If the item exists updates the quantity.
   * @param {Item} item The item to be added
   */
  public addShoppingListItems(item: Item): void {

    // If the item exists, add the quantity
    for (let listItem of this._shoppingListItems) {
      if(item.getName() == listItem.getName()) {
        listItem.add(item);
        return;
      }
    }

    this._shoppingListItems.push(item);
  }







  public addFridgeListItem(item: Item): void {

    // If the item exists, add the quantity
    for (let listItem of this._fridgeListItems) {
      if(item.getName() == listItem.getName()) {
        listItem.add(item);
        return;
      }
    }

    this._fridgeListItems.push(item);
  }


  public removeFridgeListItem(item: Item): void {

    for (let key in this._fridgeListItems) {

      let fridgeItem = this._fridgeListItems[Number(key)];

      if(item.getName() == fridgeItem.getName()) {
        // Subtract the item from the fridge
        fridgeItem.subtract(item);
        // If the quantity reach zero, remove the item from the list
        if(fridgeItem.getQuantity() <= 0) {
          this._fridgeListItems.splice(Number(key), 1);
          return;
        }
      }
    }


  }
}
