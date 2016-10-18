import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Question } from './models/question.model';
import { QuestionsDataService } from './services/questionsData.service';

@Component({
    selector: 'detailQuestion',
    template: `<div class="'detailQuestion_Container">
                   <div>
                        <span class="detailQuestion_Title">Title:</span>{{question.title}}
                   </div>
                   <div>
                        <span class="detailQuestion_Text">Text:</span>{{question.text}}
                   </div>
               </div>`,
    styles: [` .'detailQuestion_Container {
                    margin: 10px;
                    border: 2px solid black;
                }
            `],
    providers: [QuestionsDataService]    
})

export class DetailQuestionComponent { 

  //@Input() question: Question;
  question: Question = new Question(0, "vdvfdfds", "fdsfdsfd");

  constructor(private questionsDataService: QuestionsDataService, 
              private route: ActivatedRoute) {

        this.question = new Question(0, "vdvfdfds", "fdsfdsfd");

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.questionsDataService.getQuestionByid(id)
            .then(question => this.question = question);
        });

  }
 
}