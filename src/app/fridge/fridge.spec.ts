import { Item } from "../item/item.class";
import { Fridge } from "./fridge.class";
import { Recipe } from "../recipe/recipe.class";

describe("Fridge class", function() {

  let fridge = new Fridge();

  it("add: Add an item to the fridge", function () {
    fridge.add(new Item('Pizza crust', 1));
    fridge.add(new Item('Tomato sauce', 1));
    fridge.add(new Item('Mozzarella', 2));
    expect(fridge.getContents()).toContain(new Item('Pizza crust', 1));
    expect(fridge.getContents()).toContain(new Item('Tomato sauce', 1));
    expect(fridge.getContents()).toContain(new Item('Mozzarella', 2));
  });

  it("add: Add same item to the fridge", function () {
    fridge.add(new Item('Pizza crust', 1));
    fridge.add(new Item('Mozzarella', 2));
    expect(fridge.getContents()).toContain(new Item('Pizza crust', 2));
    expect(fridge.getContents()).toContain(new Item('Mozzarella', 4));
  });

  it("remove: Remove amount from an item", function () {
    fridge.remove(new Item('Mozzarella', 1));
    expect(fridge.getContents()).toContain(new Item('Mozzarella', 3));
  });

  it("remove: Remove completely an item", function () {
    fridge.remove(new Item('Pizza crust', 2));
    expect(fridge.getContents()).not.toContain(new Item('Pizza crust', 1));
  });

  it("checkRecipe: Check a recipe", function () {

    const NAME: string = 'Pizza Margherita';
    const INGREDIENTS: Item[] = [
      new Item('Pizza crust', 1),
      new Item('Tomato sauce', 1),
      new Item('Mozzarella', 8),
      new Item('Plum tomatoes', 2),
      new Item('Basil', 1)
    ];
    const INSTRUCTIONS: string[] = [
      'Put everything together',
      'Bake for 14-16 minutes'
    ];
    const ESTIMATED_TIME: number = 60;
    let recipe = new Recipe(NAME, INGREDIENTS, INSTRUCTIONS, ESTIMATED_TIME);
    let list: { [listName: string]: Item[]; } = {
      'shoppingList': [
        new Item('Pizza crust', 1),
        new Item('Mozzarella', 5),
        new Item('Plum tomatoes', 2),
        new Item('Basil', 1)
      ],
      'fridgeList': [
        new Item('Tomato sauce', 1),
        new Item('Mozzarella', 3)
      ]
    };

    expect(fridge.checkRecipe(recipe)).toEqual(list);
  });
});
