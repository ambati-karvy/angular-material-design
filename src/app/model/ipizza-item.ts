import { PizzaSizeEnum, PizzaToppingsEnum } from './project-form';
import { IToppingItem } from './itopping-item';

export interface IPizzaItem {
    size: PizzaSizeEnum;
  /**
   * A small hack for imitating a different model returned from server,
   * for the simplicity sake the same interface was used.
   * In real life the server model may vary from the form model.
   * In this case you need to maintain both the server model interface and the client form interface.
   */
  toppings: IToppingItem[] | PizzaToppingsEnum[];
}
