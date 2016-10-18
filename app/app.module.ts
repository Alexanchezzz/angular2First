import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { QuestionsListComponent }  from './questionsList.component';
import { EditQuestionComponent }  from './editQuestion.component';
import { DetailQuestionComponent }  from './detailQuestion.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, 
             RouterModule.forRoot([
                { path: '', component: QuestionsListComponent } ,
                { path: 'DetailQuestion/:id', component: DetailQuestionComponent } /*,
                { path: 'EditQuestion/:id', component: EditQuestionComponent } */
             ])
   ],
  declarations: [ AppComponent, QuestionsListComponent, 
                  EditQuestionComponent, DetailQuestionComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
