import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent{
  allUsers : any[]=[];
constructor(private api:ListService){}
ngOnInit() {
 this.view()
}
view(){
  this.api.list().subscribe({
    next:(res:any)=>{
      console.log(res.recipes);
      this.allUsers = res.recipes
      
    }
   })
}


}
