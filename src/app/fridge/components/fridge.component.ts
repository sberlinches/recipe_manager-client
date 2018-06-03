import { Component, OnInit } from '@angular/core';
import { FridgeService } from "../fridge.service";
import { Fridge } from "../fridge";

@Component({
  selector: 'app-fridge',
  templateUrl: '../views/fridge.component.html',
  styleUrls: ['../assets/fridge.component.css']
})
export class FridgeComponent implements OnInit {

  public _fridge: Fridge;
  public _showContent: boolean;

  constructor(
    private fridgeService: FridgeService
  ) {
    this._showContent = false;
  }

  ngOnInit() {
    this.getFridge()
  }

  /**
   * Gets the fridge contents
   */
  private getFridge() {
    this._fridge = this.fridgeService.getFridge();
  }

  /**
   * Shows the fridge content
   */
  public showContent(): void {
    this._showContent = (!this._showContent);
  }
}
