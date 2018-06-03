import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from "./components/shoppingList.component";

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
  providers: []
})

export class ShoppingListModule {}
