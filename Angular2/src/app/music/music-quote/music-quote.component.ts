import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-quote',
  templateUrl: './music-quote.component.html',
  styleUrls: ['./music-quote.component.scss']
})
export class MusicQuoteComponent implements OnInit {

  quote: {quote: string, author: string};

  constructor() {
    this.quote = {
      quote: 'All we wanna know is where the stars came from, but do we ever stop to watch them shine?',
      author: 'Jon Bellion'
    };
  }

  ngOnInit() {
  }

}
