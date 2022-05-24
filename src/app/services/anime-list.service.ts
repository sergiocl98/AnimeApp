import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://api.jikan.moe/v4/'

const topAnime = baseUrl + "top/anime"

@Injectable()
export class AnimeListService {

  constructor(private http: HttpClient) { }

  getTopAnime() {
    return this.http.get(topAnime);
  }
}
