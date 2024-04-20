import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../app/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!:Food;

  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService){
   activatedRoute.params.subscribe((params)=>{
     if(params['id'])
     this.food = foodService.getFoodById(params['id']);
   })

  }
  ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
