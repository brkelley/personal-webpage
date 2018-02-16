import { Component, OnInit } from '@angular/core';
import { Resume } from '../models/resume/resume.model';
import { Experience } from '../models/resume/experience.model';
import { ResumeService } from './resume.service';
import { ProfessionalExperience } from '../models/resume/professional-experience.model';

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

  filterResumeByType(type: string): Experience[] {
    return this.resume.professionalExperience.filter((el: ProfessionalExperience) => {
      return el.type === type;
    });
  }

  getResume() {
    this.resumeService.getResume().subscribe((data: Resume) => {
      this.resume = data;
    });
  }
}
