import { Component, OnInit } from '@angular/core';
import { FridgeService } from "../fridge.service";
import { Fridge } from "../fridge.class";

@Component({
  selector: 'app-fridge',
  templateUrl: '../views/fridge.component.html',
  styleUrls: ['../assets/fridge.component.css']
})
export class FridgeComponent implements OnInit {

  public fridge: Fridge;

  constructor(
    private fridgeService: FridgeService
  ) { }

  ngOnInit() {
    this.getFridge()
  }

  /**
   * Get the fridge contents
   */
  private getFridge() {
    this.fridge = this.fridgeService.getFridge();
  }

}
