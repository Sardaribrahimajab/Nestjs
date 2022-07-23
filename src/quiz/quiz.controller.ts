import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/create.quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService:QuizService){}
    @Get('/')
    getalldata(){
        return this.quizService.getalldata();
    }
    @Post('/')
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData:CreateQuizDto){

        return this.createQuiz(quizData)
    }
}
