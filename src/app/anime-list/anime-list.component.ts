import { AnimeListService } from './../services/anime-list.service';
import { AnimeDataInterface, AnimeResponseInterface } from './models/animes-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animeList: AnimeDataInterface[] = []
  constructor(private animeListService: AnimeListService) { }

  ngOnInit(): void {
    this.animeListService.getTopAnime()
    .subscribe((data: AnimeResponseInterface) =>{
      const results: AnimeDataInterface[] = data.data;
      this.animeList = results;
    })
  }

}
