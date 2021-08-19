import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes:Quiz[] = [];

  currentQuiz = 0;

  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;

  

  result = false;

  constructor(private testService:TestService) { }

  ngOnInit(): void {

    this.quizzes = this.testService.getQuizzes();


  }

  onAnswer(option:boolean){
    this.answerSelected = true;
    this.currentQuiz++;
    setTimeout(()=>{
      this.currentQuiz++;
      this.answerSelected = false;
    },3000);
    
    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
  }

  showResult(){
    this.result = true;
  }
}