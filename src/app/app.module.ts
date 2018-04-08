import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AlbumsListComponent } from './components/album-list/albums-list.component';
import { PhotosService } from './services/photos.service';
import { PhotosConfig } from './photos.config';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [PhotosService, PhotosConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
