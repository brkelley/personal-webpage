import { Experience } from './experience.model';

export class ProfessionalExperience extends Experience {
  title: string;
  company: string;
  technologies: string;
  type: string;
  relevantWebsites: string;
}