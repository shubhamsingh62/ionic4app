import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  lodedRecipe: Recipe;

  constructor(private activateRoute: ActivatedRoute , private recipeService: RecipesService , private router: Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paraMap => {
           if( !paraMap.has('recipeId') ) {
                return;
           }
           const recipeId = paraMap.get('recipeId');
           console.log(recipeId)
           this.lodedRecipe = this.recipeService.getRecipe(recipeId);
           console.log(this.lodedRecipe)
    });
  }
 
}
