import { Ingredians } from '../shared/ingredians.modal';
import { Subject } from 'rxjs';

//import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    //ingredientsChanged = new EventEmitter<Ingredians[]>();
    ingredientsChanged = new Subject<Ingredians[]>();
    starteEditing = new Subject<number>();

    private ingredients:Ingredians[] = [
        new Ingredians('Apple', 10),
        new Ingredians('Dragonfruit', 20),
        new Ingredians('Pineapple', 30)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredians)
    {   
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredians)
    {
        this.ingredients.push(ingredient);
        //this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredians[])
    {
        this.ingredients.push(...ingredients);
        //this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}