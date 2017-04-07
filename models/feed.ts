import { Article } from './article';

interface IElasticFeedSource {
    title: string;
    link: string;
    url: string;
}

interface IElasticFeed {
    _id: string;
    _source: IElasticFeedSource;
}

export class Feed {
    id: string;
    title: string;
    url: string;
    link: string;
    articles: Article[];

    constructor(id = undefined, title = '', link = '', url = '') {
        this.id = id;
        this.title = title;
        this.link = link;
        this.url = url;
    }

    static fromElastic(result: IElasticFeed) {
        return new this(result._id, result._source.title, result._source.link, result._source.url);
    }
}
