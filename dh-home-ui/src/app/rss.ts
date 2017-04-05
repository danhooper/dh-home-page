import { RSSArticle } from './rss-article';

export class RSS {
  id: string;
  title: string;
  url: string;
  articles: RSSArticle[];
}
