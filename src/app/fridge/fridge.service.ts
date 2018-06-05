import { Injectable } from "@angular/core";
import { FRIDGE } from "./fridge.mock";
import { Fridge } from './fridge';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  /**
   * Gets the fridge.
   * @returns {Fridge} The fridge object
   */
  public getFridge(): Fridge {
    return FRIDGE;
  }
}
