import { Recipe } from './recipe';
import { Item } from "../item/item";

export const RECIPES: Recipe[] = [
  new Recipe(
    'Pizza Margherita',
    [
      new Item('Pizza crust', 1),
      new Item('Tomato sauce', 1),
      new Item('Mozzarella', 8),
      new Item('Plum tomatoes', 2),
      new Item('Basil', 1)
    ],
    [
      'Put everything together',
      'Bake for 14-16 minutes'
    ],
    60
    )
];
