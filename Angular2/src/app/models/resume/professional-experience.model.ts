import { Experience } from './experience.model';

export class ProfessionalExperience extends Experience {
  company: string;
  technologies: string;
  type: string;
  relevantWebsites: string;
}