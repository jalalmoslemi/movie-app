import { Genres } from './Genres';

export interface Movie {
  ageRate: string;
  created_at: string;
  id: number;
  imdbRate: string;
  language: string;
  madeIn: string;
  photo: string;
  shortStory: string;
  title: string;
  type: string;
  updated_at: string;
  yearCreate: number;

  genres?: Genres;
}
