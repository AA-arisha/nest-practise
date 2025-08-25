import { Controller, Get } from "@nestjs/common";
import { recipeService } from "../services/recipeService.service";

@Controller('recipes')
export class RecipeController{
    constructor (private readonly recipeservice : recipeService){};
    @Get()
    display(){
        return this.recipeservice.getRecipes();
    }
    
}