import { Component } from '@angular/core';
import { Question } from './models/question.model';
import { QuestionsDataService } from './services/questionsData.service';

@Component({
    selector: 'questionsList',
    template: `<div *ngFor="let question of getQuestions()">
                 <div>Title: {{question.title}}</div>
                 <div>Text: {{question.text}}</div>
               <div>`,
    providers: [QuestionsDataService]
})
export class QuestionsListComponent { 

     questions : Question[];

    constructor(private questionsDataService : QuestionsDataService){
        this.getQuestions();
    };

    getQuestions() {
        return this.questionsDataService.getQuestions();
        //this.questionsDataService.getQuestions().then((questions:Question[])=>this.questions = questions);
    }
 
}