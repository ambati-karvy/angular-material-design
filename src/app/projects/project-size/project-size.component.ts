import { Component, OnInit } from '@angular/core';
import { PizzaSizeEnum } from 'src/app/model/project-form';

@Component({
  selector: 'app-project-size',
  templateUrl: './project-size.component.html',
  styleUrls: ['./project-size.component.scss']
})
export class ProjectSizeComponent {

  constructor() { }

  pizzaSize: PizzaSizeEnum;
  PizzaSizeEnum = PizzaSizeEnum;

  changeSize(size: PizzaSizeEnum) {
    this.pizzaSize = size;
    this.propagateChange(size);
  }

  propagateChange = (value: PizzaSizeEnum) => {};
  writeValue(value: PizzaSizeEnum) {
    this.pizzaSize = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
