import { Component, OnInit } from '@angular/core';

import { Resume } from '../models/resume/resume.model';
import { ResumeService } from '../core/services/resume/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResume();
  }

  private getResume(): void {
    this.resumeService.getResume().subscribe((resume: Resume) => {
      this.resume = resume;
    });
  }
}
