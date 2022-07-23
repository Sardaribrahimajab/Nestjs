import { Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { quiz } from './entity/quiz.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports:[TypeOrmModule.forFeature([quiz])],
  controllers: [QuizController],
  providers:[QuizService],
  exports: [QuizService]
})
export class QuizModule {
}
