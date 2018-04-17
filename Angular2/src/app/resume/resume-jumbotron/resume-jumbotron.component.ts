import { Component, Input, OnInit } from '@angular/core';

import { ContactInformation } from '../../models/resume/contact-information.model';

@Component({
  selector: 'resume-jumbotron',
  templateUrl: './resume-jumbotron.component.html',
  styleUrls: ['./resume-jumbotron.component.scss']
})
export class ResumeJumbotronComponent implements OnInit {

  @Input() contactInformation: ContactInformation;

  photoLocation: string;

  constructor() {
    this.photoLocation = 'assets/resume-photos/formal-resume-photo.png';
  }

  ngOnInit() {
  }

  pageLoaded(): boolean {
    return !!this.contactInformation;
  }
}
