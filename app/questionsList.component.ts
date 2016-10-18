import { Component } from '@angular/core';
import { Question } from './models/question.model';
import { QuestionsDataService } from './services/questionsData.service';
import { EditQuestionComponent } from './editQuestion.component';

@Component({
    selector: 'questionsList',
    template: ` <editQuestion [question]="selectedQuestion"></editQuestion>
                <div *ngFor="let question of questions">
                    <div class="questionsList_ItemContainer">  
                        <div class="questionsList_Item" (click)="OnSelectQuestion(question)">
                            <div><span class="questionsList_Item_Title">Title:</span> {{question.title}}</div>
                            <div><span class="questionsList_Item_Text">Text:</span> {{question.text}}</div>
                        </div>
                    </div>
                    <div class="editQuestionLink" [hidden]="selectedQuestion == null">
                        <a href="DetailQuestion/{{question.id}}">Detail</a>
                    </div>
               </div>
               
              `,
    styles: [` .questionsList_ItemContainer {
                    margin: 10px;
                    display: inline-block;
                }

                .questionsList_Item_Title, 
                .questionsList_Item_Text {
                    font-weight: bold;
                }

                .editQuestionLink {
                    display: inline-block;
                }
            `],           
    providers: [QuestionsDataService]
})
export class QuestionsListComponent { 

    questions : Question[];

    selectedQuestion : Question;
    messageForChildComponent : string;

    constructor(private questionsDataService : QuestionsDataService){
        this.getQuestions();
        this.selectedQuestion = new Question(0, "", "");
    };

    getQuestions() {
        //return this.questionsDataService.getQuestions();
        this.questionsDataService.getQuestions().then((questions:Question[])=>this.questions = questions);
    }

    OnSelectQuestion(question : Question) {
        this.selectedQuestion = question;
    }
 
}