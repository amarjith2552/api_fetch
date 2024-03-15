import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  url='https://dummyjson.com/recipes'

  constructor(private http:HttpClient) { }
  list(){
    //api call
    return this.http.get(`${this.url}`)
  }

}
