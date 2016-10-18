import { Component, Input } from '@angular/core';
import { Question } from './models/question.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'editQuestion',
    template: `<div class="editQuestion_Container">
                   <div>
                        <span class="editQuestion_Title">Title:</span>
                        <input [(ngModel)]="question.title" />
                   </div>
                   <div>
                        <span class="editQuestion_Text">Text:</span>
                        <input [(ngModel)]="question.text" />
                   </div>
               </div>`,
    styles: [` .editQuestion_Container {
                    margin: 10px;
                    border: 2px solid black;
                }
            `]
    
})

export class EditQuestionComponent { 

  @Input() question: Question;

  constructor() {}
 
}