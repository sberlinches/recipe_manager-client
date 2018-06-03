import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipeModule } from './recipe/recipe.module';
import { AppComponent } from './app.component';
import { FridgeModule } from './fridge/fridge.module';
import { ShoppingListModule } from "./shoppingList/shoppingList.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecipeModule,
    FridgeModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
