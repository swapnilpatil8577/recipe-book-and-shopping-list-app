import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredians } from '../shared/ingredians.modal';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients: Ingredians[];

  /*ingredient:Ingredians[] = [
    new Ingredians('Apple', 10),
    new Ingredians('Dragonfruit', 20),
    new Ingredians('Pineapple', 30),
    new Ingredians('watermelon', 50),
    new Ingredians('Banana', 40)
  ];*/

  private subscription: Subscription;

  constructor(private shopList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopList.getIngredients();
    this.subscription = this.shopList.ingredientsChanged
    .subscribe(
      (ingredients: Ingredians[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index: number){
  this.shopList.starteEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*onIngredientAdded(ingredient:Ingredians){
    this.ingredients.push(ingredient);
  }*/
}
