import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Topping, Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  @Input() toppings: Topping[];
  @Output() add = new EventEmitter<FormGroup>();
  @Input() editPizzaInput: Pizza;
  
  form = this.fb.group({
    name:['',Validators.required],
    toppings: this.fb.array([])
  })

  ngOnInit() {
    console.log("--------")
    console.log(this.editPizzaInput)
  }

  get control() {
    return this.form.get('toppings') as FormArray;
  }

  addTopping(topping: Topping) {
    this.control.push(new FormControl(topping));
  }

  removeTopping(index: number) {
    this.control.removeAt(index);
  }

  selectTopping(topping: Topping) {
    const index = this.control.value.indexOf(topping);
    if (!!~index) {
      this.removeTopping(index);
    } else {
      this.addTopping(topping);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}
