import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './reciepes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './reciepes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './reciepes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch:'full'},
  {path:'recipes', component: ReciepesComponent, children: [
    {path:'', component: RecipeStartComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecipeDetailsComponent},
    {path:':id/edit', component: RecipeEditComponent},
  ]},
  {path:'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
