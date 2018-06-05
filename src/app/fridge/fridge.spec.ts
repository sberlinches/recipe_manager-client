import { Item } from "../item/item";
import { Fridge } from "./fridge";
import { Recipe } from "../recipe/recipe";

describe("Fridge class", function() {

  let fridge = new Fridge();

  it("add: Add an item to the fridge", function () {
    fridge.addItem(new Item('Pizza crust', 1));
    fridge.addItem(new Item('Tomato sauce', 1));
    fridge.addItem(new Item('Mozzarella', 2));
    expect(fridge.getItems()).toContain(new Item('Pizza crust', 1));
    expect(fridge.getItems()).toContain(new Item('Tomato sauce', 1));
    expect(fridge.getItems()).toContain(new Item('Mozzarella', 2));
  });

  it("add: Add same item to the fridge", function () {
    fridge.addItem(new Item('Pizza crust', 1));
    fridge.addItem(new Item('Mozzarella', 2));
    expect(fridge.getItems()).toContain(new Item('Pizza crust', 2));
    expect(fridge.getItems()).toContain(new Item('Mozzarella', 4));
  });

  it("remove: Remove amount from an item", function () {
    fridge.removeItem(new Item('Mozzarella', 1));
    expect(fridge.getItems()).toContain(new Item('Mozzarella', 3));
  });

  it("remove: Remove completely an item", function () {
    fridge.removeItem(new Item('Pizza crust', 2));
    expect(fridge.getItems()).not.toContain(new Item('Pizza crust', 1));
  });

  it("checkRecipe: Check a recipe", function () {

    let recipe = new Recipe(
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
      60);

    let list: { [listName: string]: Item[]; } = {
      shopping: [
        new Item('Pizza crust', 1),
        new Item('Mozzarella', 5),
        new Item('Plum tomatoes', 2),
        new Item('Basil', 1)
      ],
      fridge: [
        new Item('Tomato sauce', 1),
        new Item('Mozzarella', 3)
      ]
    };

    expect(fridge.checkRecipe(recipe)).toEqual(list);
  });
});
