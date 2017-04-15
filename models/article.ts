interface IArticle {
    title: string;
    link: string;
    description: string;
}

export class Article {
    title: string;
    link: string;
    description: string;


    constructor(data: IArticle) {
        this.title = data.title;
        this.link = data.link;
        this.description = data.description;
    }
}
