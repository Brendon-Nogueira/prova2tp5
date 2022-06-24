import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private serverApi = "https://music-api-2022.herokuapp.com/"
  
  constructor(private httpClient : HttpClient) { }

  

  getCategory() : Observable <Category[]>{
    return this.httpClient.get<Category[]>(this.serverApi)
  }

  createCategory(category : Category) : Observable<Category>{
    return this.httpClient.post<Category>(this.serverApi , category)
 }

 updateCategory(category : Category) : Observable<Category>{
  return this.httpClient.put<Category>(this.serverApi + id)
}

deleteCategroy(id: number) : Observable<any> {
  return this.httpClient.delete(this.serverApi + id, {
    headers: undefined,
    context: undefined,
    observe: undefined,
    params: undefined,
    reportProgress: undefined,
    responseType: 'text'
  })
}}
