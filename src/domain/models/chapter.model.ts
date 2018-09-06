import { Lesson } from './lesson.model';

export interface Chapter {
  id: number;
  title: string;
  description: string;
  lessonsHtml: string;

  labsHtml: string;
}
