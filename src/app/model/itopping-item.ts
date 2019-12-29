import { PizzaToppingsEnum } from './project-form';

export interface IToppingItem {
    name: PizzaToppingsEnum;
    selected: boolean;
}
