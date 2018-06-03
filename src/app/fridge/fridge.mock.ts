import { Fridge } from './fridge.class';
import { Item } from "../item/item.class";

export const FRIDGE: Fridge = new Fridge();

FRIDGE.add(new Item('Pineapple', 1));
