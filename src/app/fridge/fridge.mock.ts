import { Fridge } from './fridge';
import { Item } from "../item/item.class";

export const FRIDGE: Fridge = new Fridge();

FRIDGE.add(new Item('Pineapple', 1));
FRIDGE.add(new Item('Tomato sauce', 10));
