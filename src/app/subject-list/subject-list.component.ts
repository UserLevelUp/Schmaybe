import { Component } from '@angular/core';
import { SubjectModel } from '../models/subject-model.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  subjects: SubjectModel[] = [
    new SubjectModel('Subject 1'),
    new SubjectModel('Subject 2', true),
    new SubjectModel('Subject 3')
  ];

  toggleSubject(subject: SubjectModel): void {
    subject.toggleChecked();
  }
}
