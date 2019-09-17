import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesResolverService } from './recipes-resolver.service';

const routes: Routes = [{
  path: '',
  component: RecipesComponent,
  canActivate: [AuthGuardService],
  children: [{
    path: '',
    component: RecipeStartComponent
  }, {
    path: 'new',
    component: RecipeEditComponent
  }, {
    path: ':id',
    component: RecipeDetailsComponent,
    resolve: [RecipesResolverService]
  }, {
    path: ':id/edit',
    component: RecipeEditComponent,
    resolve: [RecipesResolverService]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
