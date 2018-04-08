import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { PhotosConfig } from '../photos.config';
import { AlbumInfo } from '../models/album-info.data';
import { Photo } from '../models/photo.data';
import { PhotosetEnvelope } from '../models/flickr/photoset-envelope.data';
import { PhotosetsEnvelope } from '../models/flickr/photosets-envelope.data';
import { Photoset } from '../models/flickr/photoset.data';
import { Photosets } from '../models/flickr/photosets.data';
import { PhotosetPhotos } from '../models/flickr/photoset-photos.data';

@Injectable()
export class PhotosService {

  constructor(public http: Http, private photosConfig: PhotosConfig) { }

  getPhotosets(): Observable<AlbumInfo[]> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = this.photosConfig.PHOTOSETS_URL;

    return this.http.get(url, options)
      .map((res: Response) => {
        let envelope: PhotosetsEnvelope<Photosets> = new PhotosetsEnvelope<Photosets>(res.json());
        if (envelope.stat.toLowerCase() == "ok") {
          let albums: AlbumInfo[] = [];
          for (let photoset of envelope.data.photoset) {
            let album: AlbumInfo = new AlbumInfo(photoset);
            albums.push(album);
          }

          return albums;
        }
        else {
          Observable.throw("ERROR");
        }
      })
      .catch((error: any) => Observable.throw("ERROR"));
  }

  getPhotosetInfo(photosetId): Observable<AlbumInfo> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.photosConfig.PHOTOSET_INFO_URL + photosetId;

    return this.http.get(url, options)
      .map((res: Response) => {
        let envelope: PhotosetEnvelope<Photoset> = new PhotosetEnvelope<Photoset>(res.json());
        if (envelope.stat.toLowerCase() == "ok") {
          return new AlbumInfo(envelope.data);
        }
        else {
          Observable.throw("ERROR");
        }
      })
      .catch((error: any) => Observable.throw("ERROR"));
  }

  getPhotosetPhotos(photosetId): Observable<Photo[]> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.photosConfig.PHOTOSET_PHOTOS_URL + photosetId;

    return this.http.get(url, options)
    .map((res: Response) => {
      let envelope: PhotosetEnvelope<PhotosetPhotos> = new PhotosetEnvelope<PhotosetPhotos>(res.json());

      if (envelope.stat.toLowerCase() == "ok") {
        let photos: Photo[] = [];

        for (let photosetPhoto of envelope.data.photo){
          let photo: Photo = new Photo(photosetPhoto);
          photos.push(photo);
        }

        return photos;
      }
      else {
        Observable.throw("ERROR");
      }
    })
    .catch((error: any) => Observable.throw("ERROR"));
  }
}
