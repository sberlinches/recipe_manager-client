export class Item {

  private name: string;
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
   * Returns the name of the item.
   * @returns {string} The name of the item
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Returns the amount of the item.
   * @returns {number} The amount of the item
   */
  public getQuantity(): number {
    return this.quantity;
  }

  /**
   *
   * @param {string} name
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Sets the amount of the item.
   * @param {number} quantity The amount of the item
   */
  public setQuantity(quantity: number): void {
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
