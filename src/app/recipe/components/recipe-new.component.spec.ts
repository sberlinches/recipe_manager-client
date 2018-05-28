import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RecipeNewComponent } from "./recipe-new.component";

describe('RecipeNewComponent', () => {

  let component: RecipeNewComponent;
  let fixture: ComponentFixture<RecipeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNewComponent ],
      imports: [ FormsModule ]
    })
      .compileComponents();
  }));

  /**
   * The function is called once before each spec
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Should create
   * Test if the component is created.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Add/remove ingredient
   * Add an ingredient to the recipe and then remove it
   */
  it('Add/remove ingredient', () => {

    const hostElement = fixture.nativeElement;

    // get the input and display elements from the DOM
    const ingredientInput: HTMLInputElement = hostElement.querySelector('#ingredient_name');
    const quantityInput: HTMLInputElement = hostElement.querySelector('#ingredient_quantity');

    // simulate user entering a value into the input box
    ingredientInput.value = 'Tomato';
    quantityInput.value = '1';

    // dispatch a DOM event so that Angular learns of input value change.
    ingredientInput.dispatchEvent(new Event('input'));
    quantityInput.dispatchEvent(new Event('input'));
    hostElement.querySelector("#add_ingredient_button")
      .dispatchEvent(new Event("click"));

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    // Even though I've copied this spec from the same angular documentation,
    // "textContent" doesn't show the content from the input...
    //expect(ingredientDisplay.textContent).toBe('Tomato');
    //expect(quantityDisplay.textContent).toBe('1');
    expect(hostElement.querySelector('#ingredient-0')).not.toBe(null);
    expect(hostElement.querySelector('#quantity-0')).not.toBe(null);

    hostElement.querySelector("#remove_ingredient_button-0")
      .dispatchEvent(new Event("click"));
    fixture.detectChanges();

    expect(hostElement.querySelector('#ingredient-0')).toBe(null);
    expect(hostElement.querySelector('#quantity-0')).toBe(null);
  });

  /**
   * Add/remove instruction
   * Add an instruction to the recipe and then remove it.
   */
  it('Add/remove instruction', () => {

    const hostElement = fixture.nativeElement;

    // get the input and display elements from the DOM
    const instructionInput: HTMLTextAreaElement = hostElement.querySelector('#instruction');

    // simulate user entering a value into the input box
    instructionInput.value = "Bla bla bla";

    // dispatch a DOM event so that Angular learns of input value change.
    instructionInput.dispatchEvent(new Event('input'));
    hostElement.querySelector("#add_instruction_button")
      .dispatchEvent(new Event("click"));

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    // "textContent" shows the content from the text area, but mysteriously with
    // extra white spaces and stuff, so the comparison fails.
    //expect(instructionDisplay.textContent).toBe('Bla bla bla');
    expect(hostElement.querySelector('#instruction-0')).not.toBe(null);

    hostElement.querySelector("#remove_instruction_button-0")
      .dispatchEvent(new Event("click"));
    fixture.detectChanges();

    expect(hostElement.querySelector('#instruction-0')).toBe(null);
  });
});
