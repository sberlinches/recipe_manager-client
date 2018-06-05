import { Injectable } from "@angular/core";
import { FRIDGE } from "./fridge.mock";
import { Fridge } from './fridge';
import { Item } from "../item/item";

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  /**
   * Gets the fridge.
   * @returns {Fridge} The fridge object
   */
  public getFridge(): Fridge {
    return FRIDGE;
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
}
