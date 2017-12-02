import { ContactInformation } from './contact-information.model';
import { Education } from './education.model';
import { ProfessionalExperience } from './professional-experience.model';
import { ExtraCurricularExperience } from './extra-curricular-experience.model';

export class Resume {
  contactInformation: ContactInformation;
  knownLanguages: string[];
  education: Education[];
  professionalExperience: ProfessionalExperience[];
  otherExperience: ExtraCurricularExperience[];
}
