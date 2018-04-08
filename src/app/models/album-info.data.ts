import { FlickrUtility } from '../services/flickr-utility';
import { PhotoServerInfo } from './flickr/photo-server-info.data';

export class AlbumInfo {
  id: string;
  title: string;
  description: string;
  photoCount: number;
  photoUrl: string;

  // constructor(values: Object = {}) {
  //   Object.assign(this, values);
  //   let photoServerInfo = new PhotoServerInfo(photoset.primary, photoset.secret, photoset.server, photoset.farm);
  //   this.photoUrl = FlickrUtility.getSmall320PhotoUrl(photoServerInfo);
  // }

  constructor(photoset: any) {
    this.id = photoset.id;
    this.title = photoset.title._content;
    this.description = photoset.description._content;
    this.photoCount = photoset.photos;

    let photoServerInfo = new PhotoServerInfo(photoset.primary, photoset.secret, photoset.server, photoset.farm);
    this.photoUrl = FlickrUtility.getSmall320PhotoUrl(photoServerInfo);
  }
}
