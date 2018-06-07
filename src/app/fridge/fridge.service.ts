import { Injectable } from "@angular/core";
import { FRIDGE } from "./fridge.mock";
import { Fridge } from './fridge';
import { Item } from "../item/item";
import { ShoppingListService } from "../shoppingList/shoppingList.service";

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  constructor(
    private _shoppingListService: ShoppingListService
  ) {}

  /**
   * Gets the fridge.
   * @returns {Fridge} The fridge object
   */
  public getFridge(): Fridge {
    return FRIDGE;
  }

  /**
   *
   * @returns {Item[]}
   */
  public getItems(): Item[] {
    return FRIDGE.getItems();
  }

  /**
   * Returns an item from the fridge.
   * @param {number} index
   * @returns {Item}
   */
  public getItem(index: number): Item {
    return FRIDGE.getItem(index);
  }

  /**
   * Adds an item to the fridge.
   * Updates the values in the shopping list.
   * @param {Item} item The item to be added
   */
  public addItem(item: Item): void {
    FRIDGE.addItem(item);

    // Updates the vales in the shopping list
    this._shoppingListService.removeFromShoppingList(item, item.getQuantity());
  }

  /**
   * Removes the specified amount of the item from the fridge, if the amount
   * falls below zero, removes the item completely from the fridge.
   * @param {Item} item The item to be removed
   */
  public removeItem(item: Item): void {
    FRIDGE.removeItem(item);
  }

  /**
   * Adds x to the quantity to the fridge.
   * Updates the values in the shopping list.
   * @param {Item} item The item to remove from
   * @param {number} x The quantity to remove
   */
  public addXToItem(item: Item, x: number): void {
    item.setQuantity(item.getQuantity() + x);

    // Updates the vales in the shopping list
    this._shoppingListService.removeFromShoppingList(item, x);
  }

  /**
   * Subtracts x from the quantity from the fridge. If the quantity left drops
   * below zero is removed from the fridge.
   * Updates the values in the shopping list.
   * @param {Item} item The item to remove from
   * @param {number} x The quantity to remove
   */
  public subtractXFromItem(item: Item, x: number): void {

    if(item.getQuantity() <= 1)
      FRIDGE.removeItem(item);
    else
      item.setQuantity(item.getQuantity()-x);

    // Updates the vales in the shopping list
    this._shoppingListService.removeFromFridgeList(item, x);
  }
}
