import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from "./shoppingList.service";
import { ShoppingListComponent } from "./components/shoppingList.component";
import { FridgeService } from "../fridge/fridge.service";

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule
  ],
  // Components listed here can be used in components outside this module
  exports: [
    ShoppingListComponent
  ],
  providers: [
    ShoppingListService,
    FridgeService
  ]
})

export class ShoppingListModule {}
