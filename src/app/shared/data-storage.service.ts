import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-book-1412-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(respone => {
      console.log(respone);
    });
  }

  fetchRecipe() {
    return this.http.get<Recipe[]>('https://recipe-book-1412-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }), tap(recipes => {
      this.recipeService.setRecipe(recipes);
    }));
  }

}
