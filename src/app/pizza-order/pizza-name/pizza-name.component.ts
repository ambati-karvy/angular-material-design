import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-name',
  templateUrl: './pizza-name.component.html',
  styleUrls: ['./pizza-name.component.scss']
})
export class PizzaNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }

}
