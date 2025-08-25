import { Injectable } from "@nestjs/common";
import axios from "axios";
@Injectable()
export class recipeService{
    private readonly URL = "https://dummyjson.com/recipes";

    async getRecipes(){
        const response =await axios.get(this.URL);
        return response.data;
    }
}