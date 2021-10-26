import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Banana-Bread','It is made with bananas', 'https://iambaker.net/wp-content/uploads/2011/09/banana-bread-5.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
