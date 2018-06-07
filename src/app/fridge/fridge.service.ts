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
   * Adds an item to the shopping list. If the item exists updates the quantity.
   * @param {Item} item The item to be added
   */
  public addItem(item: Item): void {
    FRIDGE.addItem(item);

    let shoppingList = this._shoppingListService.getShoppingList();
    let addToFridge = false;
    let difference = 0;

    // When an item is incremented in the fridge, it is subtracted from the
    // shopping list
    for (let sListItem of shoppingList.getShoppingListItems()) {
      if (sListItem.getName() == item.getName()) {

        difference = item.getQuantity() - sListItem.getQuantity();

        if(difference < 0)
          sListItem.setQuantity(sListItem.getQuantity() - item.getQuantity());
        else {
          sListItem.setQuantity(0);
          addToFridge = true;
        }

        break
      }
    }

    // Once the shopping list has reached zero, the item begins to be added to
    // the fridge list
    if(addToFridge) {
      for (let fridgeItem of shoppingList.getFridgeListItems()) {
        if (fridgeItem.getName() == item.getName()) {
          fridgeItem.setQuantity(difference);
          break;
        }
      }
    }
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
   * Add x to the quantity of the item.
   * @param {Item} item
   * @param {number} x
   */
  public addXToItem(item: Item, x: number): void {

    let shoppingList = this._shoppingListService.getShoppingList();
    let addToFridge = false;

    item.setQuantity(item.getQuantity() + x);

    // When an item is incremented in the fridge, it is subtracted from the
    // shopping list
    for (let sListItem of shoppingList.getShoppingListItems()) {
      if (sListItem.getName() == item.getName()) {
        if(sListItem.getQuantity() > 0)
          sListItem.setQuantity(sListItem.getQuantity() - x);
        else
          addToFridge = true;
        break
      }
    }

    // Once the shopping list has reached zero, the item begins to be added to
    // the fridge list
    if(addToFridge) {
      for (let fridgeItem of shoppingList.getFridgeListItems()) {
        if (fridgeItem.getName() == item.getName()) {
          fridgeItem.setQuantity(fridgeItem.getQuantity() + x);
          break;
        }
      }
    }
  }

  /**
   * Subtracts x from the quantity of the item. If the quantity drops below
   * zero, removes the item.
   * @param {Item} item
   * @param {number} x
   */
  public subtractXFromItem(item: Item, x: number): void {

    let shoppingList = this._shoppingListService.getShoppingList();
    let addtoShoppingList = false;

    if(item.getQuantity() <= 1)
      FRIDGE.removeItem(item);
    else
      item.setQuantity(item.getQuantity()-x);

    // When an item is subtracted from the fridge, it does in the list too
    for (let fridgeItem of shoppingList.getFridgeListItems()) {
      if (fridgeItem.getName() == item.getName()) {
        if(fridgeItem.getQuantity() > 0)
          fridgeItem.setQuantity(fridgeItem.getQuantity() - x);
        else
          addtoShoppingList = true;
        break;
      }
    }

    if(addtoShoppingList) {
      for (let sListItem of shoppingList.getShoppingListItems()) {
        if (sListItem.getName() == item.getName()) {
          sListItem.setQuantity(sListItem.getQuantity() + x);
          break;
        }
      }
    }
  }
}
