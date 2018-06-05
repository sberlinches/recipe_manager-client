import { Item } from "./item";

describe("Item class", function() {

  let quantity: number = 2;
  let item = new Item('Pizza crust', quantity);

  it("constructor: Create an item", function () {
    expect(item.getQuantity()).toBe(quantity);
  });

  it("add: Add from the same item", function () {
    quantity = item.getQuantity();
    item.add(new Item('Pizza crust', 3));
    expect(item.getQuantity()).toBe(quantity + 3);
  });

  it("add: Add from different item", function () {
    quantity = item.getQuantity();
    item.add(new Item('Tomato sauce', 3));
    expect(item.getQuantity()).toBe(quantity);
  });

  it("subtract: Subtract from the same item", function () {
    quantity = item.getQuantity();
    item.subtract(new Item('Pizza crust', 3));
    expect(item.getQuantity()).toBe(quantity - 3);
  });

  it("subtract: Subtract from different item", function () {
    quantity = item.getQuantity();
    item.subtract(new Item('Tomato sauce', 3));
    expect(item.getQuantity()).toBe(quantity);
  });
});
