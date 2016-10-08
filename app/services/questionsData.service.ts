import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';


@Injectable()

export class QuestionsDataService {

    public questions : Question[] = [
        new Question ( 1, "Title 1 question", "Text 1 question" ),
        new Question ( 2, "Title 2 question", "Text 2 question" ),
        new Question ( 3, "Title 3 question", "Text 3 question" ),
        new Question ( 4, "Title 4 question", "Text 4 question" ),
        new Question ( 5, "Title 5 question", "Text 5 question" ),
        new Question ( 6, "Title 6 question", "Text 6 question" )
    ]; 

    public getQuestions() {
        //return Promise.resolve(this.questions);
        return this.questions;
    }

}