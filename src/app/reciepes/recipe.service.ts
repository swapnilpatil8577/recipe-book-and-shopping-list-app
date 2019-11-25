import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredians } from '../shared/ingredians.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
//import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();

    //recipeSelected = new Subject<Recipe>();

    recipesChanges = new Subject<Recipe[]>();

    private reciepes: Recipe[] =[
        new Recipe('Fruit Salad', 'This is the best ever fruit salad.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/06/beetroot_halloumi_salad.jpg',[
          new Ingredians('Meat', 1),
          new Ingredians('French Fries', 10)
        ]),
    
        new Recipe('Pizza', 'This is the best ever Pizzaaa.', 'https://media.gettyimages.com/photos/directly-above-shot-of-pizza-against-white-background-picture-id923784158?s=612x612', [
          new Ingredians('Butter chiked', 10),
          new Ingredians('Kabab', 20)
        ]),
    
        new Recipe('Paneer Masala', 'This is the best ever fruit salad.', 'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/paneer-butter-masala-1922828.jpg', [
          new Ingredians('Chicken Trippel Rice', 50),
          new Ingredians('Kabab',10)
        ])
      ];

      constructor(private shopList: ShoppingListService) {}

      getRecipes(){
        return this.reciepes.slice();
      }

      getRecipe(index:number){
        return this.reciepes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredians[]) {
        this.shopList.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe)
      {
        this.reciepes.push(recipe);
        this.recipesChanges.next(this.reciepes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.reciepes[index] = newRecipe;
        this.recipesChanges.next(this.reciepes.slice());
      }
}