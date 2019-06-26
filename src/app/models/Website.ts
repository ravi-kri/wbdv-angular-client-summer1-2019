import Page from './PageModel';

export default class Column {
  title: String;
  author: String;
  pages: Page[];

  constructor(title: String = 'New Website', author: String = "New Author", pages: Page[] = []) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

}