import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeListRoutingModule } from './anime-list-routing.module';
import { AnimeListComponent } from './anime-list.component';


@NgModule({
  declarations: [
    AnimeListComponent
  ],
  imports: [
    CommonModule,
    AnimeListRoutingModule
  ]
})
export class AnimeListModule { }
