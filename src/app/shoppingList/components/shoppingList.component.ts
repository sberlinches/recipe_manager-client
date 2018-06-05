import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../shoppingList.service";
import { ShoppingList } from "../shoppingList";

@Component({
  selector: 'app-shopping-list',
  templateUrl: '../views/shoppingList.component.html'
})
export class ShoppingListComponent implements OnInit {

  public _shoppingList: ShoppingList;
  public _showContent: boolean;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.getShoppingList();
  }

  private getShoppingList() {
    this._shoppingList = this.shoppingListService.getShoppingList();
  }

  private showContent(): void {
    this._showContent = (!this._showContent);
  }
}
