import { Article } from './article';

export class Feed {
  id: string;
  title: string;
  url: string;
  articles: Article[];
}
