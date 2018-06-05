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
  public _showFridgeAddComponent: boolean;

  constructor(
    private _fridgeService: FridgeService
  ) {
    this._showContent = false;
    this._showFridgeAddComponent = false;
  }

  ngOnInit() {
    this.getFridge();
  }

  private getFridge() {
    this._fridge = this._fridgeService.getFridge();
  }

  public showContent(): void {
    this._showContent = (!this._showContent);
  }

  public addItem(): void {
    this._showFridgeAddComponent = true;
  }

  public removeItem(index: number): void {
    let item = this._fridgeService.getItem(index);
    this._fridgeService.removeItem(item);
  }
}
