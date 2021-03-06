import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicPlaylist } from '../Models/MusicPlaylist';

@Injectable({
  providedIn: 'root'
})
export class MusicPlaylistRestService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Context-Type': 'application/json'
      }
    )
  }

  url: string = environment.MUSIC_PLAYLIST_REST;

  constructor(private http: HttpClient) { }

  //Return all music playlists
  GetAllMusicPlaylists(): Observable<MusicPlaylist[]> {
    return this.http.get<MusicPlaylist[]>(this.url, this.httpOptions);
  }

  //Add a music playlist
  AddMusicPlaylist(musicPlaylist2Add: MusicPlaylist): Observable<MusicPlaylist> {
    return this.http.post<MusicPlaylist>(this.url, musicPlaylist2Add, this.httpOptions);
  }
}
