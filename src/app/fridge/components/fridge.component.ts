import { Component, OnInit } from '@angular/core';
import { FridgeService } from "../fridge.service";
import { ShoppingListService } from "../../shoppingList/shoppingList.service";
import { Fridge } from "../fridge";

@Component({
  selector: 'app-fridge',
  templateUrl: '../views/fridge.component.html',
  styleUrls: ['../assets/fridge.component.css'],
  providers: [ShoppingListService]
})
export class FridgeComponent implements OnInit {

  public _fridge: Fridge;
  public _showContent: boolean;

  constructor(
    private _fridgeService: FridgeService,
    private _shoppingListService: ShoppingListService
  ) {
    this._showContent = false;
  }

  ngOnInit() {
    this.getFridge();
  }

  /**
   * Gets the fridge contents
   */
  private getFridge() {
    this._fridge = this._fridgeService.getFridge();
  }

  /**
   * Shows the fridge content
   */
  public showContent(): void {
    this._showContent = (!this._showContent);
  }
}
