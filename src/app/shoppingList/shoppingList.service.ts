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
    SHOPPINGLIST.addShoppingListItems(item);
  }

  /**
   * Adds an item to the fridge
   * @param {Item} item
   */
  public addFridgeListItem(item: Item): void {
    SHOPPINGLIST.addFridgeListItem(item);
  }

  /**
   * Returns the quantity of an item
   * @param {Item} item
   * @returns {number}
   */
  public getFridgeItemQuantityByItem(item: Item): number {
    return SHOPPINGLIST.getFridgeItemQuantityByItem(item);
  }

  /**
   *
   * @param {Item} item
   * @param {number} x
   */
  public removeFromShoppingList(item: Item, x: number): void {

    let diff = 0;

    for (let toBuy of SHOPPINGLIST.getShoppingListItems()) {
      if (toBuy.getName() == item.getName()) {

        diff = x - toBuy.getQuantity();

        if(diff < 0)
          toBuy.setQuantity(toBuy.getQuantity() - x);
        else
          toBuy.setQuantity(0);
        break
      }
    }

    if(diff >= 0) {
      for (let inFridge of SHOPPINGLIST.getFridgeListItems()) {
        if (inFridge.getName() == item.getName()) {
          inFridge.setQuantity(inFridge.getQuantity() + diff);
          break;
        }
      }
    }
  }

  /**
   *
   * @param {Item} item
   * @param {number} x
   */
  public removeFromFridgeList(item: Item, x: number): void {

    x = 10;

    let diff = 0;
    let addtoShoppingList = false;

    for (let inFridge of SHOPPINGLIST.getFridgeListItems()) {
      if (inFridge.getName() == item.getName()) {

        diff = x - inFridge.getQuantity();

        if(diff < 0)
          inFridge.setQuantity(inFridge.getQuantity() - x);
        else
          inFridge.setQuantity(0);
        break;
      }
    }

    if(diff >= 0) {
      for (let toBuy of SHOPPINGLIST.getShoppingListItems()) {
        if (toBuy.getName() == item.getName()) {
          toBuy.setQuantity(toBuy.getQuantity() + diff);
          break;
        }
      }
    }
  }
}
