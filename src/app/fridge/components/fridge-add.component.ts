import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FridgeService } from "../fridge.service";
import { Item } from "../../item/item";

@Component({
  selector: 'app-fridge-add',
  templateUrl: '../views/fridge-add.component.html',
  styleUrls: ['../assets/fridge.component.css']
})
export class FridgeAddComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  public item: Item;

  constructor(
    private _fridgeService: FridgeService,
  ) {}

  ngOnInit() {
    this.item = new Item("",0);
  }

  onSubmit(form) {
    if(form.valid) {
      this._fridgeService.addItem(this.item);
      this.closeModal.emit();
    }
  }

  public cancel() {
    this.closeModal.emit();
  }
}
