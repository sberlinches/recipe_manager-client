import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './components/recipe.component';
import { RecipeNewComponent } from './components/recipe-new.component';
import { RecipeEditComponent } from './components/recipe-edit.component';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeNewComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // Components listed here can be used in components outside this module
  exports: [
    RecipeComponent
  ],
  providers: []
})

export class RecipeModule {}
