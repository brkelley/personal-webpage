import { Component, OnInit } from '@angular/core';
import { ResumeDataApiService } from '../data-api/resume-data-api/resume-data-api.service';
import { Resume } from '../models/resume/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeData: Resume;

  constructor(private resumeDataApi: ResumeDataApiService) { }

  ngOnInit() {
    this.getResume();
  }

  getResume() {
    this.resumeDataApi.getResume().subscribe(data => {
      console.log(data);
      this.resumeData = data;
    });
  }
}
