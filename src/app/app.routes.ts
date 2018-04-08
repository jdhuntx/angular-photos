import { Routes, RouterModule } from '@angular/router';
import { AlbumsListComponent } from './components/album-list/albums-list.component';
//import { AlbumComponent } from './components/'

export const ROUTES: Routes = [
  { path: '',      component: AlbumsListComponent },
  { path: 'photos', component: AlbumsListComponent },
  //{ path: 'albums/:id', component: AlbumComponent }
  // { path: '**',    component: NoContentComponent },
];
