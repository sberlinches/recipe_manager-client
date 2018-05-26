import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipeModule } from './recipe/recipe.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
