//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Components
import { RecipeComponent } from './components/recipe.component';
import { RecipeNewComponent } from './components/recipe-new.component';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeNewComponent
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
