import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  quizzes:Quiz[] = [
    {
      question:'Which of the following statement is correct for AngularJS?',
      answer:[
        {option:'AngularJS is an HTML Framework', correct:false },
        {option:'AngularJS is an Java Framework',correct:false},
        {option:'AngularJS is an JavaScript Framework',correct:true},
        {option:'AngularJS is an SQL Framework',correct:false}
      ]
    },

    {
      question:'On which of the Architectural pattern AngularJS is based?',
      answer:[
        {option:'Observer Pattern', correct:false },
        {option:'Decorator Pattern',correct:false},
        {option:'MVC Architecture Pattern',correct:false},
        {option:'MVVM Architecture Pattern',correct:true}
      ]
    },

    {
      question:'AngularJS is perfect for?',
      answer:[
        { option:'SPAs', correct:true },
        {option:'MPAs',correct:false},
        {option:'DPAs',correct:false},
        {option:'CPAs',correct:false}
      ]
    },

    {
      question:'Which of the following directive is used to bind the application data to the HTML view in AngularJS?',
      answer:[
        { option:'ng-app directive', correct:false },
        {option:'ng-model directive',correct:false},
        {option:'ng-bind directive',correct:true},
        {option:'ng-init directive',correct:false}
      ]
    },

    {
      question:'Which of the following is the correct syntax for writing AngularJS expressions?',
      answer:[
        { option:'(expression)', correct:false },
        {option:'{{expression}}',correct:true},
        {option:'{{{expression}}}',correct:false},
        {option:'[expression]',correct:false}
      ]
    },

    {
      question:'Which of the following statement is true about the lowercase filter?',
      answer:[
        { option:'The lowercase filter converts a text to lower case text.', correct:true },
        {option:'The lowercase filter is a function that takes text as input.',correct:false},
        {option:'Both',correct:false},
        {option:'None',correct:false}
      ]
    },

    {
      question:'Which of the following is an advantage of AngularJS?',
      answer:[
        { option:'AngularJS code is unit testable.', correct:false },
        {option:'AngularJS provides reusable components.',correct:false},
        {option:'AngularJS uses dependency injection and makes use of separation of concerns.',correct:false},
        {option:'All of the above.',correct:true}
      ]
    },

    {
      question:'Which of the following statement is true about $dirty flag?',
      answer:[
        { option:'$dirty flag is used to state that value has been changed.', correct:true },
        {option:'$dirty flag is used to state that the form has invalid data.',correct:false},
        {option:'Both of the above.',correct:false},
        {option:'None of the above.',correct:false}
      ]
    },

    {
      question:'What is the use of Angular Controllers in the application?',
      answer:[
        { option:'Angular controllers are used for controlling the data.', correct:true },
        {option:'Angular controllers are used for displaying the data.',correct:false},
        {option:'Both of the above.',correct:false},
        {option:'None of the above.',correct:false}
      ]
    },

    {
      question:'Which of the following is used to share data between controller and view in AngularJS?',
      answer:[
        { option:'using model', correct:false},
        {option:'using services',correct:true},
        {option:'using factory',correct:false},
        {option:'using $scope',correct:false}
      ]
    }
  ]


  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}