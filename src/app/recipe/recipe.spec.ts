import { Item } from "../item/item.class";
import { Recipe } from "./recipe"

describe("Recipe class", function() {

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

  it("constructor: Create a recipe", function () {
    expect(recipe.getName()).toBe(NAME);
    expect(recipe.getIngredients()).toBe(INGREDIENTS);
    expect(recipe.getInstructions()).toBe(INSTRUCTIONS);
    expect(recipe.getEstimatedTime()).toBe(ESTIMATED_TIME);
  });

  it("addItem: add an ingredient", function () {
    let newItem = new Item('Ground pepper', 1);
    recipe.addItem(newItem);
    expect(recipe.getIngredients()).toContain(newItem);
  });

  it("addInstruction: add a step", function () {
    let newStep = 'Remove from the oven';
    recipe.addInstruction(newStep);
    expect(recipe.getInstructions()).toContain(newStep);
  });
});
