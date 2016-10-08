export class Question {
  id: number;
  title: string;
  text: string;
  createDate: any;

  constructor(id: number, title: string, text: string) {
 
     this.id = id;
     this.title = title;
     this.text = text;
  };
}
