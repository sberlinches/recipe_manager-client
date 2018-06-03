import { Injectable } from "@angular/core";
import { ShoppingList } from './shoppingList';
import { SHOPPINGLIST } from "./shoppingList.mock";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public getShoppingList(): ShoppingList[] {
    return SHOPPINGLIST;
  }
}
