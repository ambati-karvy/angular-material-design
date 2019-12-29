import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Topping } from '../pizza';

@Component({
  selector: 'app-toppings-selector',
  templateUrl: './toppings-selector.component.html',
  styleUrls: ['./toppings-selector.component.scss']
})
export class ToppingsSelectorComponent implements OnInit {
  touched = false;
  @Input() parent: FormGroup;

  @Input() selected: Topping[];

  @Input() toppings: Topping[];

  @Output() select = new EventEmitter<Topping>();

  constructor() { }

  ngOnInit() {
  }
  get invalid() {
    return (
      this.parent.hasError('noToppings') &&
      this.touched
    );
  }

  exists(topping: Topping) {
    return !!~this.selected.indexOf(topping);
  }

  isActive(topping: Topping) {
    return this.exists(topping);
  }

  onSelect(topping: Topping) {
    this.touched = true;
    this.select.emit(topping);
  }
}
