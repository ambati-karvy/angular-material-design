import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Topping } from '../pizza';

@Component({
  selector: 'app-pizza-selected',
  templateUrl: './pizza-selected.component.html',
  styleUrls: ['./pizza-selected.component.scss']
})
export class PizzaSelectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() parent: FormGroup;

  @Input() selected: Topping[];

  @Output() remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }

}
