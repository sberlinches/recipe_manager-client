import { Recipe } from 'src/app/a1/recipe.class';
import { Item } from "src/app/a1/item.class";

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
    ),
  new Recipe(
    'Pizza Margherita2',
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
  ),
];
