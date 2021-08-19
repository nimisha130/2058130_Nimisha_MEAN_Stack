import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tracker } from '../tracker';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {

  listofData: tracker[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addData(trackRef:NgForm){
    let trackerinfo = trackRef.value;
    
    let newTracker:tracker={

      id:trackerinfo.id,name:trackerinfo.name,task:trackerinfo.task,deadLine:trackerinfo.deadLine
    
    }

    this.listofData.push(newTracker);

  }
}
