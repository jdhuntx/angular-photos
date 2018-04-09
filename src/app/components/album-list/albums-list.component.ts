import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { AlbumInfo } from '../../models/album-info.data';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  albums: AlbumInfo[];
  errorMessage: string;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.photosService.getPhotosets()
      .subscribe(
      albums => { this.albums = albums; },
      error => this.errorMessage = <any>error);
  }

}
