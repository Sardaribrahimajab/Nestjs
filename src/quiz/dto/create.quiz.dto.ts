import { IsNotEmpty, isNotEmpty, Length } from "class-validator"

export class CreateQuizDto{

    @IsNotEmpty({message: "The quiz should have title"})
    @Length(3,255)
    title:string
    @IsNotEmpty()
    @Length(3)
    description:string
}