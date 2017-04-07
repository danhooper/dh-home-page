interface IArticle {
    title: string;
    link: string;
}

export class Article {
    title: string;
    link: string;


    constructor(data: IArticle) {
        this.title = data.title;
        this.link = data.link;
    }
}
