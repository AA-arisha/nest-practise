import { Module } from '@nestjs/common';
import { RecipeModule } from './modules/recipeModule.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [RecipeModule,
            MongooseModule.forRoot('mongodb+srv://adnanarisha0:mongo@cluster0.kuiieaz.mongodb.net/users'),
            UsersModule
  ], 
})
export class AppModule {}
