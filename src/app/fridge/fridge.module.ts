import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FridgeComponent } from "./components/fridge.component";

@NgModule({
  declarations: [
    FridgeComponent
  ],
  imports: [
    CommonModule
  ],
  // Components listed here can be used in components outside this module
  exports: [
    FridgeComponent
  ],
  providers: []
})

export class FridgeModule {}
