import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from './categories.service';
import { Category } from './category';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

 newCategory : Category {} as Category
 categoryList : Category[] = []
 
  constructor(private categoryService : CategoriesService, private router : Router) { }

  saveCategory(myCategory : Category){
    this.categoryList.push(newCategory)
  }
  ngOnInit(): void {
  }

 
}
