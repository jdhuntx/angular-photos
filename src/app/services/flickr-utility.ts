import { Injectable } from '@angular/core';
import { PhotoServerInfo } from '../models/flickr/photo-server-info.data';
import { PhotosConfig } from '../photos.config';

@Injectable()
export class FlickrUtility {

  // Sizes from Flickr:
  // s: Square 75 - 75 x 75
  // q: Square 150 - 150 x 150
  // t: Thumbnail - 100 x 66
  // m: Small 240 - 240 x ?
  // n: Small 320 - 320 x ?
  // : Medium 500 - 500 x ?
  // z: Medium 640 - 640 x ?
  // c: Medium 800 - 800 x ?
  // b: Large 1024 - 1024 x ?
  // h: Large 1600 - 1600 x ?
  // k: Large 2048 - 2048 x ?
  // o: Original

  private static availableSizes = new Array('s', 'q', 't', 'm', 'n', 'z', 'c', 'b', 'h', 'k', 'o');

  static getSquare150PhotoUrl(photoServerInfo) {
  	return FlickrUtility.getPhotoUrl(photoServerInfo, 'q');
  }

  static getThumbnailPhotoUrl(photoServerInfo) {
  	return FlickrUtility.getPhotoUrl(photoServerInfo, 't');
  }

  static getSmall240PhotoUrl(photoServerInfo) {
  	return FlickrUtility.getPhotoUrl(photoServerInfo, 'm');
  }

  static getSmall320PhotoUrl(photoServerInfo) {
  	return FlickrUtility.getPhotoUrl(photoServerInfo, 'n');
  }

  static getMedium500PhotoUrl(photoServerInfo) {
  	return FlickrUtility.getPhotoUrl(photoServerInfo, '');
  }

  static getMedium640PhotoUrl(photoServerInfo) {
  	return FlickrUtility.getPhotoUrl(photoServerInfo, 'z');
  }

  static getLarge1040PhotoUrl(photoServerInfo) {
    return FlickrUtility.getPhotoUrl(photoServerInfo, 'b');
  }

  static getLarge1600PhotoUrl(photoServerInfo) {
    return FlickrUtility.getPhotoUrl(photoServerInfo, 'h');
  }

  static getLarge2048PhotoUrl(photoServerInfo) {
    return FlickrUtility.getPhotoUrl(photoServerInfo, 'k');
  }

  static getPhotoUrl(photoServerInfo, size) {
    let photoId: string;
    let sizeString: string;

    if (FlickrUtility.availableSizes.indexOf(size) > -1) {
      sizeString = '_' + size;
    }
    else {
      // Size is invalid or not specified
      sizeString = '';
    }

    return 'http://farm' + photoServerInfo.farm + '.static.flickr.com/' + photoServerInfo.server + '/' + photoServerInfo.id + '_' + photoServerInfo.secret + sizeString + '.jpg';
  }
}
