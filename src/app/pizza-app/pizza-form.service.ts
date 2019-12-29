import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PizzaSizeEnum, PizzaToppingsEnum } from '../model/project-form';

@Injectable({
  providedIn: 'root'
})
export class PizzaFormService {
  public availableToppings = [...Object.values(PizzaToppingsEnum)];
  public form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      selectedPizza: null,
      pizzas: this.fb.array([])
    })
  } 
  

  get pizzasArray(): FormArray {
    return this.form.get('pizzas') as FormArray;
  }

  addPizza(): FormGroup {
    const pizzaGroup = this.getPizzaFormGroup();
    this.pizzasArray.push(this.getPizzaFormGroup());

    this.form.markAsDirty();

    return pizzaGroup;
  }

  selectPizzaForEdit(index: number) {
    this.form.get('selectedPizza').setValue(index);
  }
  getPizzaFormGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM): FormGroup {
    return this.fb.group({
      size: [size],
      toppings: this.mapToCheckboxArrayGroup(this.availableToppings)
    });
  }

  private mapToCheckboxArrayGroup(data: string[]): FormArray {
    return this.fb.array(data.map((i) => {
      return this.fb.group({
        name: i,
        selected: false
      });
    }));
  }
}
