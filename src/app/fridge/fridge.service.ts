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
   * @param {number} index
   * @param {number} x
   */
  public addXToItem(index: number, x: number): void {
    let item = FRIDGE.getItem(index);
    item.setQuantity(item.getQuantity() + x);

    let shoppingList = this._shoppingListService.getShoppingList();


    for (let fridgeItem of shoppingList.getFridgeListItems()) {
      if (fridgeItem.getName() == item.getName()) {
        fridgeItem.setQuantity(fridgeItem.getQuantity() + x);
        break;
      }
    }

    for (let basketItem of shoppingList.getShoppingListItems()) {
      if (basketItem.getName() == item.getName()) {
        if(basketItem.getQuantity() >= x)
          basketItem.setQuantity(basketItem.getQuantity() - x);
        else {
          basketItem.setQuantity(0);
          shoppingList.getFridgeListItems().push(new Item(item.getName(), x))
        }
      }
    }

  }

  /**
   * Subtracts x from the quantity of the item. If the quantity drops below
   * zero, removes the item.
   * @param {number} index
   * @param {number} x
   */
  public subtractXFromItem(index: number, x: number): void {

    let item = FRIDGE.getItem(index);

    if(item.getQuantity() <= 0)
      FRIDGE.removeItem(item);
    else
      item.setQuantity(item.getQuantity()-x);
  }
}
