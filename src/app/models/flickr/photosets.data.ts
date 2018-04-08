import { Photoset } from './photoset.data';

export class Photosets {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photoset: Array<Photoset>;

  constructor(photosets: any) {
    this.page = photosets.page;
    this.pages = photosets.pages;
    this.perpage = photosets.perpage;
    this.total = photosets.total;
    this.photoset = photosets.photoset;
  }
}
