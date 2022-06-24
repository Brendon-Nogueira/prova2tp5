import { Component, OnInit } from '@angular/core';
import { Music } from './music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  newMusic : Music {} as Music
  constructor() { }

  ngOnInit(): void {
  }

}
