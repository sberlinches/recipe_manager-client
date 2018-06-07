import { Component, OnInit } from '@angular/core';
import { FridgeService } from "../fridge.service";
import { Fridge } from "../fridge";
import {FRIDGE} from "../fridge.mock";

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
    this._showContent = true;
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

  public addToItem(index: number): void {
    let item = this._fridgeService.getItem(index);
    this._fridgeService.addXToItem(item, 1);
  }

  public subtractFromItem(index: number): void {
    let item = this._fridgeService.getItem(index);
    this._fridgeService.subtractXFromItem(item, 1);
  }
}
