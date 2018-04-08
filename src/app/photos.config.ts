import { Injectable } from '@angular/core';

@Injectable()
export class PhotosConfig {
  public readonly PHOTOS_ERROR: string = 'UNKNOWN ERROR';

  //public readonly PHOTOSETS_URL: string = 'https://api.flickr.com/services/rest/?api_key=42fafad1dce354de3fd04ff79e334907&format=json&nojsoncallback=1&method=flickr.photosets.getList&user_id=53353745@N00';
  public readonly PHOTOSETS_URL: string = '/app/photosets.json';

  public readonly PHOTOSET_INFO_URL: string = 'https://api.flickr.com/services/rest/?api_key=42fafad1dce354de3fd04ff79e334907&format=json&nojsoncallback=1&method=flickr.photosets.getInfo&photoset_id=';
  //public readonly PHOTOSET_INFO_URL: string = '/app/photoset-info.json';
  
  //public readonly PHOTOSET_PHOTOS_URL: string = '/app/photoset-photos.json';
  public readonly PHOTOSET_PHOTOS_URL: string = 'https://api.flickr.com/services/rest/?api_key=42fafad1dce354de3fd04ff79e334907&format=json&nojsoncallback=1&method=flickr.photosets.getPhotos&photoset_id=';

//public readonly FLICKR_API_KEY: string = '42fafad1dce354de3fd04ff79e334907';
  public readonly FLICKR_USERID: string = '53353745@N00';
  //public readonly PHOTOSETS_METHOD: string = 'flickr.photosets.getList';
}
