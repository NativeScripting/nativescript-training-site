import { Course } from './course.model';
import { Trainer } from './trainer.model';
import { SessionLocation } from './session-location.model';

export interface Session {
  id: string;
  order: number;
  title: string;
  descriptionHtml: string;
  dateStart: Date;
  dateEnd: Date;
  timeStart: string;
  timeEnd: string;
  registerLink: string;

  price: number;

  course: Course;
  trainer: Trainer;
  location: SessionLocation;
}
