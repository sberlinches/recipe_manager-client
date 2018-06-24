export class Item {

  public name: string;
  public quantity: number;

  /**
   * Creates a new item object.
   * @param {string} name The name of the item
   * @param {number} quantity The amount of the item
   */
  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * Adds two items of the same name/category.
   * @param {Item} item
   */
  public add(item: Item): void {
    if(this.name == item.name)
      this.quantity += item.quantity;
  }

  /**
   * Subtracts two items of the same name/category.
   * @param {Item} item
   */
  public subtract(item: Item): void {
    if(this.name == item.name)
      this.quantity -= item.quantity;
  }
}
