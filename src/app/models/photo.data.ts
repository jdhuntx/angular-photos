import { FlickrUtility } from '../services/flickr-utility';
import { PhotoServerInfo } from './flickr/photo-server-info.data';

export class Photo {
  id: string;
  title: string;
  square150Url: string;
  small320Url: string;
  large1024Url: string;

  constructor(photo: any) {
    this.id = photo.id;
    this.title = photo.title;
    let photoServerInfo = new PhotoServerInfo(photo.id, photo.secret, photo.server, photo.farm);
    this.square150Url = FlickrUtility.getSquare150PhotoUrl(photoServerInfo);
    this.small320Url = FlickrUtility.getSmall320PhotoUrl(photoServerInfo);
    this.large1024Url = FlickrUtility.getLarge1040PhotoUrl(photoServerInfo);
  }
}
