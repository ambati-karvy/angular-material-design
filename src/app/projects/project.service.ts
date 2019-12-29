import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PizzaSizeEnum, PizzaToppingsEnum } from '../model/project-form';
import { IToppingItem } from '../model/itopping-item';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public form: FormGroup;
  public availableToppings = [...Object.values(PizzaToppingsEnum)]

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      selectedPizza: null,
      pizzas:this.fb.array([])
    })
  }

  get  pizzasArray(): FormArray {
    return this.form.get('pizzas') as FormArray;
  }

  addProject(): FormGroup {
    const projectGroup = this.getProjectGroup();
    this.pizzasArray.push(this.getProjectGroup())

    this.form.markAsDirty();
    return projectGroup;
  }

  selectPizzaForEdit(index: number) {
    this.form.get('selectedPizza').setValue(index);
  }

  getProjectGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM ) : FormGroup {

    return this.fb.group({
      size:[size],
      toppings: this.mapToCheckboxArrayGroup(this.availableToppings)
    })
  }

  private mapToCheckboxArrayGroup(data: string[]): FormArray {

    return this.fb.array(data.map((i) =>{
       return this.fb.group({
         name:i,
         selected:false
       })
    }));
  }

  getSelectedToppings(toppings: IToppingItem[]): IToppingItem[] {
    return toppings.filter(i => i.selected);
  }
}
