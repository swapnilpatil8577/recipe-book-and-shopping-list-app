import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  reciepes: Recipe[];
  subscription: Subscription;

  /*=[
    //new Recipe('Fruit Salad', 'This is the best ever fruit salad.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/06/beetroot_halloumi_salad.jpg'),

    //new Recipe('Pizza', 'This is the best ever Pizzaaa.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/06/beetroot_halloumi_salad.jpg'),

    //new Recipe('Paneer Masala', 'This is the best ever fruit salad.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/06/beetroot_halloumi_salad.jpg')
  ];*/

  constructor(private recipeSrevice: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.subscription =  this.recipeSrevice.recipesChanges
    .subscribe(
      (reciepes: Recipe[]) => {
        this.reciepes = reciepes;
      }
    );
    this.reciepes = this.recipeSrevice.getRecipes();
  }

  /*onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }*/

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
