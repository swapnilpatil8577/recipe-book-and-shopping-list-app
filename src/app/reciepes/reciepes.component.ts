import { Component, OnInit } from '@angular/core';
//import { Recipe} from './recipe.model'

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit {
  //selectedRecipe = Recipe;
  //selectedRecipe: Recipe;
  
  //constructor(private recipeService: RecipeService) { }
  
  constructor() { }
  ngOnInit() {
    /*this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );*/
  }

}
