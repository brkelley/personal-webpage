import { Component, OnInit } from '@angular/core';
import { BandBotService } from '../concert-spotifyer/band-bot.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private bandBotService: BandBotService) { }

  ngOnInit() {
    this.bandBotService.createBandBotSpotify();
  }

}
