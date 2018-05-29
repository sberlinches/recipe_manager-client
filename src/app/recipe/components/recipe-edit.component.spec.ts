import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RecipeEditComponent } from "./recipe-edit.component";

describe('RecipeEditComponent', () => {

  let component: RecipeEditComponent;
  let fixture: ComponentFixture<RecipeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditComponent ],
      imports: [ FormsModule ]
    })
      .compileComponents();
  }));

  /**
   * The function is called once before each spec
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditComponent);
    component = fixture.componentInstance;

    // This component needs from an index to be loaded properly
    component.index = 0;

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
  });

  /**
   * Add/remove instruction
   * Add an instruction to the recipe and then remove it.
   */
  it('Add/remove instruction', () => {
  });
});
