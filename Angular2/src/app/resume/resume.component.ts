import { Component, OnInit } from '@angular/core';

import { Resume } from '../models/resume/resume.model';
import { ResumeService } from '../core/services/resume/resume.service';
import { ProfessionalExperience } from '../models/resume/professional-experience.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;
  resumeLocation = 'assets/Resume.pdf';
  resumeCategories: string[];
  resumeObjects: Object;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResume();
  }

  private getResume(): void {
    this.resumeService.getResume().subscribe((resume: Resume) => {
      this.resume = resume;
      this.resumeCategories = this.extractResumeCategories();
      this.resumeObjects = this.sortExperienceByCategories(this.resumeCategories);
    });
  }

  extractResumeCategories(): string[] {
    let cats;
    cats = this.resume.professionalExperience
      .map((el: ProfessionalExperience) => el.type)
      .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    cats.push(...['education', 'other']);
    return cats;
  }

  sortExperienceByCategories(categories: string[]): Object {
    const exp = {};
    for (const category of categories) {
      if (category === 'other') {
        exp[category] = this.resume.otherExperience;
      } else if (category === 'education') {
        exp[category] = this.resume.education;
      } else {
        exp[category] = this.resume.professionalExperience.filter(el => el.type === category);
      }
    }
    return exp;
  }
}
