import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('Banana-Bread','It is made with bananas', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F04%2F17%2F171761.jpg&q=85'),
    new Recipe('Apple Pie','It is made with Apple', 'https://happymoneysaver.com/wp-content/uploads/2020/11/best-apple-pie-26-1.jpg'),
    new Recipe('Fruit Tart', 'It is made with fresh fruits','https://www.culinaryhill.com/wp-content/uploads/2021/05/Fresh-Fruit-Tart-Culinary-Hill-hero.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
