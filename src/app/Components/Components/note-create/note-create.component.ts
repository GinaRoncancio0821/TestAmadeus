import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import {NoteService} from 'src/app/Services/Services/note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {
  note = {
  idNote: 0,
  activity: '',
  idStudent: 0,
  idProgram: 0,
  note1: 0,
  date: '',
  state: true
  };
  submitted = false;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  createNote():void{
    debugger;
    const data = {
     activity: this.note.activity,
     idStudent: this.note.idStudent,
     idProgram: this.note.idProgram,
     note1: this.note.note1,
     date: this.note.date,
     state: true
    };
    this.noteService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });

  }

  newNote(): void {
    this.submitted = false;
    this.note = {
      idNote: 0,
      activity: '',
      idStudent: 0,
      idProgram: 0,
      note1: 0,
      date: '',
      state: true
    };
  }
}
