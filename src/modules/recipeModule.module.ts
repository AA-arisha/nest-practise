import { Module } from "@nestjs/common";
import { RecipeController } from "src/controllers/recipe.controller";
import { recipeService } from "src/services/recipeService.service";

@Module({
    controllers:[RecipeController],
    providers: [recipeService],
    
})
export class RecipeModule{};