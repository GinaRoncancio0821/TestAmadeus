import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/Services/Services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes: any;
  currentNotes = null;
  currentIndex = -1;
  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
    this.readNotes();
  }

  readNotes():void {
    debugger;
    this.noteService.readAll()
      .subscribe(
        notes => {
          this.notes = notes;
          console.log(notes);
        }, 
        error => {
         console.log(error);
        });
  }

  refresh():void {
    this.readNotes();
    this.currentNotes = null;
    this.currentIndex = -1;
  }

  setCurrentNote(note: any,index: any):void {
    this.currentNotes = note;
    this.currentIndex = index;
  }
}
