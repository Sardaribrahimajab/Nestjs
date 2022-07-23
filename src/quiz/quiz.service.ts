import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { quiz } from './entity/quiz.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateQuizDto } from './dto/create.quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(quiz)
    private readonly quizRepo: Repository<quiz>,
    ){}
  getalldata(): string{
    return "a,b,b,c";
  }
  async createUser(createquiz: CreateQuizDto): Promise<quiz> {
    const quiz = this.quizRepo.create(createquiz);
    return await this.quizRepo.save(quiz);
  }
}
