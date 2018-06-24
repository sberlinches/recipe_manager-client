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
    let isInToBuy = false;

    for (let toBuy of SHOPPINGLIST.getShoppingListItems()) {
      if (toBuy.name == item.name) {

        isInToBuy = true;
        diff = x - toBuy.quantity;

        if(diff < 0)
          toBuy.quantity = toBuy.quantity - x;
        else
          toBuy.quantity = 0;
        break
      }
    }

    for (let inFridge of SHOPPINGLIST.getFridgeListItems()) {
      if (inFridge.name == item.name) {
        if(!isInToBuy)
          //Updates the list before any recipe is selected
          inFridge.quantity = inFridge.quantity + x;
        else if(diff > 0)
          inFridge.quantity = inFridge.quantity + diff;
        break;
      }
    }
  }

  /**
   *
   * @param {Item} item
   * @param {number} x
   */
  public removeFromFridgeList(item: Item, x: number): void {

    let diff = 0;

    for (let inFridge of SHOPPINGLIST.getFridgeListItems()) {
      if (inFridge.name == item.name) {

        diff = x - inFridge.quantity;

        if(diff < 0)
          inFridge.quantity = inFridge.quantity - x;
        else
          inFridge.quantity = 0;
        break;
      }
    }

    if(diff >= 0) {
      for (let toBuy of SHOPPINGLIST.getShoppingListItems()) {
        if (toBuy.name == item.name) {
          toBuy.quantity = toBuy.quantity + diff;
          break;
        }
      }
    }
  }
}
