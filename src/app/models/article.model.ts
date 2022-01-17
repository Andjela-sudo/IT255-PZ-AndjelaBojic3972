export class Article{
    constructor(
        public id:string,
        public author:string,
        public title: string,
        public description: string,
        public urlToImage:string,
        public publishedAt: string,
        public content: string,
        public url: string,
        public sourceId: string,
        public sourceName: string){}
}