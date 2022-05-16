import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './Components/Components/note-create/note-create.component';
import { NoteListComponent } from './Components/Components/note-list/note-list.component';
import { NoteDetailsComponent } from './Components/Components/note-details/note-details.component';

const routes: Routes = [
  {path:'',redirectTo:'notes',pathMatch:'full'},
  {path:'Notes',component:NoteListComponent},
  {path:"CreateNote",component:NoteCreateComponent},
  {path:"Note/:id",component:NoteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
