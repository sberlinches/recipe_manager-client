import { Injectable } from "@angular/core";
import { Fridge } from './fridge';
import { FRIDGE } from "./fridge.mock";

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  /**
   *
   * @returns {Fridge}
   */
  public getFridge(): Fridge {
    return FRIDGE;
  }
}
