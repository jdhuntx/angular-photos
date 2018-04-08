import { PhotosetPhoto } from './photoset-photo.data';

export class PhotosetPhotos {
  id: string;
  primary: string;
  owner: string;
  ownername: string;
  page: number;
  per_page: number;
  perpage: number;
  pages: number;
  total: string;
  title: string;
  photo: Array<PhotosetPhoto>;

  constructor(photoset: any) {
    this.id = photoset.id;
    this.primary = photoset.primary;
    this.owner = photoset.owner;
    this.ownername = photoset.ownername;
    this.page = photoset.page;
    this.per_page = photoset.per_page;
    this.perpage = photoset.perpage;
    this.pages = photoset.pages;
    this.total = photoset.total;
    this.title = photoset.title;
    this.photo = photoset.photo;
  }
}
