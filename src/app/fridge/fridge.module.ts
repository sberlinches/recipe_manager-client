import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FridgeService } from "./fridge.service";
import { FridgeComponent } from "./components/fridge.component";
import { FridgeAddComponent } from "./components/fridge-add.component";

@NgModule({
  declarations: [
    FridgeComponent,
    FridgeAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // Components listed here can be used in components outside this module
  exports: [
    FridgeComponent
  ],
  providers: [
    FridgeService
  ]
})

export class FridgeModule {}
