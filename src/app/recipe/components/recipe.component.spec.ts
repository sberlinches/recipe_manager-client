import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe.component';
import { RecipeNewComponent } from "./recipe-new.component";
import { RecipeEditComponent } from "./recipe-edit.component";

describe('RecipeComponent', () => {

  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeComponent,
        RecipeNewComponent,
        RecipeEditComponent
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  /**
   * The function is called once before each spec
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
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
   * Show details
   * After clicking the ">" button, the details about the recipe must be
   * displayed.
   */
  it('Show details', () => {

    const hostElement = fixture.nativeElement;

    hostElement.querySelector("#recipe_details_button-0")
      .dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(hostElement.querySelector("#recipe_details-0")).not.toBe(null);
  });

  /**
   * Show new recipe component
   * After clicking the "New recipe" button, the app must display a form to
   * create a new recipe.
   */
  it('Show new recipe component', () => {

    const hostElement = fixture.nativeElement;

    hostElement.querySelector("#recipe_new_button")
      .dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(hostElement.querySelector("#recipe_new")).not.toBe(null);
  });

  /**
   * Add recipe
   */
  it('Add recipe', () => {

    const hostElement = fixture.nativeElement;

    hostElement.querySelector("#recipe_new_button")
      .dispatchEvent(new Event("click"));

    fixture.detectChanges();

    const recipeNameInput: HTMLInputElement = hostElement.querySelector('#recipe_name');
    recipeNameInput.value = 'Test';

    recipeNameInput.dispatchEvent(new Event('input'));
    hostElement.querySelector("#new_recipe_form")
      .dispatchEvent(new Event("submit"));

    fixture.detectChanges();

    expect(hostElement.querySelector("#recipe-1")).not.toBe(null);
  });

  /**
   * Show edit recipe component
   * After clicking the "Edit" button, the app must display a form to edit a
   * the selected recipe.
   */
  it('Show edit recipe component', () => {

    const hostElement = fixture.nativeElement;

    hostElement.querySelector("#recipe_edit_button-1")
      .dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(hostElement.querySelector("#recipe_edit-1")).not.toBe(null);
  });

  /**
   * Edit recipe
   */
  it('Edit recipe', () => {

    const hostElement = fixture.nativeElement;

    hostElement.querySelector("#recipe_edit_button-0").dispatchEvent(new Event("click"));
    fixture.detectChanges();

    const recipeNameInput: HTMLInputElement = hostElement.querySelector('#recipe_name');
    recipeNameInput.value = 'Test';
    console.log("real", recipeNameInput.value);

    recipeNameInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    //console.log(hostElement.querySelector("#recipe-1 h3"));
    let wewe: HTMLElement = hostElement.querySelector("#recipe-0 h3");

    console.log(document.getElementById("recipe-0"));



    console.log("innerText", wewe.innerText);
    console.log("textContent", wewe.textContent);
    //expect(hostElement.querySelector("#recipe-1 h3").textContent).toBe("test");
  });

  /**
   * Delete recipe
   * After clicking the "Delete" button, the recipe must disappear from the
   * table.
   */
  it('Delete recipe', () => {

    const hostElement = fixture.nativeElement;

    hostElement.querySelector("#recipe_delete_button-1")
      .dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(hostElement.querySelector("#recipe-1")).toBe(null);
  });


});
