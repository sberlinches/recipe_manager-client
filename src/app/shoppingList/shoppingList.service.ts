import { Injectable } from "@angular/core";
import { SHOPPINGLIST } from "./shoppingList.mock";
import { ShoppingList } from "./shoppingList";
import { Item } from "../item/item";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  /**
   * Gets the shopping list.
   * @returns {ShoppingList} The shopping list object
   */
  public getShoppingList(): ShoppingList {
    return SHOPPINGLIST;
  }

  /**
   * Adds an item to the shopping list. If the item exists updates the quantity.
   * @param {Item} item The item to be added
   */
  public addItem(item: Item): void {
    SHOPPINGLIST.addItem(item);
  }
}
