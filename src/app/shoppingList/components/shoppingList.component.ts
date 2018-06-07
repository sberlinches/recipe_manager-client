import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../shoppingList.service";
import { FridgeService } from "../../fridge/fridge.service";
import { ShoppingList } from "../shoppingList";
import { Item } from "../../item/item";

@Component({
  selector: 'app-shopping-list',
  templateUrl: '../views/shoppingList.component.html'
})
export class ShoppingListComponent implements OnInit {

  public _shoppingList: ShoppingList;
  public _showContent: boolean;

  constructor(
    private _shoppingListService: ShoppingListService,
    private _fridgeService: FridgeService
  ) {
    this._showContent = true;
  }

  ngOnInit() {
    this.getShoppingList();
    this.populateFridgeList();
  }

  private getShoppingList(): void {
    this._shoppingList = this._shoppingListService.getShoppingList();
  }

  private populateFridgeList(): void {
    //Copy the current fridge into the shopping list
    for (let item of this._fridgeService.getItems()) {
      this._shoppingListService.addFridgeListItem(new Item(item.getName(), item.getQuantity()));
    }
  }

  private showContent(): void {
    this._showContent = (!this._showContent);
  }
}
