import { Fridge } from './fridge';
import { Item } from "../item/item";

export const FRIDGE: Fridge = new Fridge();

FRIDGE.addItem(new Item('Tomato sauce', 10));
FRIDGE.addItem(new Item('Mozzarella', 10));
FRIDGE.addItem(new Item('Basil', 10));
FRIDGE.addItem(new Item('Tears', 2));
