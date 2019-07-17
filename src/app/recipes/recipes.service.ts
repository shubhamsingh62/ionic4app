import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'spiceal chicken',
      imgUrl: 'http://littlespicejar.com/wp-content/uploads/2013/12/Finger-Lickin-Butter-Chicken-6.jpg',
      ingredient: ['chicken','butter']
    },
    {
      id: 'r2',
      title: 'butter',
      imgUrl: 'https://elavegan.com/wp-content/uploads/2019/04/Instant-Pot-Vegan-Butter-Chicken-recipe.jpg',
      ingredient: ['rice','chicken','butter']
    }

  ];

  constructor() { }

  getAllRecipes() {
      return [...this.recipes];
  }

  getRecipe(recipeId: string) {

    return { 
      ...this.recipes.find(recipe =>{
      return recipe.id === recipeId;
    })
  };
}


}
