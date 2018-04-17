import { Component } from '@angular/core';

@Component({
  selector: 'music-bio',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {

  musicBiography: string;
  instrumentList: {instrument: string, time: string}[];

  constructor() {
    this.buildMusicBiography();
    this.buildInstrumentList();
  }

  buildMusicBiography() {
    this.musicBiography = 'Music is a huge part of my life. I\'ve been playing in music since I was in seventh grade. I started with a ' +
      'drumset and a garage with some friends. None of us knew about bands or music theory or composition; we just wanted to make ' +
      'intense music like our idols (which at the time was the Red Hot Chili Peppers). When I got to middle school, I joined the band, ' +
      'and never looked back. Since then, I\'ve been in middle school and high school symphony, high school and college marching band ' +
      'and drumline, drums & bass for my church band, and a number of instruments in different garage rock bands. Nowadays, I\'m not ' +
      'part of a band or orchestra, but my passion hasn\'t died. I love going to concerts and watching local indie bands play. ' +
      'Eventually I would love to be a lead singer or drummer for a band and perform on-stage at a venue; for now, I\'m very happy ' +
      'to be in the crowd. Being surrounded by music is something I can\'t escape, and I intend to be surrounded by music for the rest ' +
      'of my life.';
  }

  buildInstrumentList() {
    this.instrumentList = [
      {instrument: 'Trumpet', time: '6th and 7th grade'},
      {instrument: 'Trombone', time: '8th grade jazz band'},
      {instrument: 'French horn', time: '10th grade wind ensemble'},
      {instrument: 'Baritone', time: '8th grade and 9th grade marching band'},
      {instrument: 'Tuba', time: '9th grade concert band and 11th grade wind ensemble'},
      {instrument: 'Sousaphone', time: '10th grade marching band'},
      {instrument: '1st bass', time: '11th grade drumline'},
      {instrument: 'Tenors', time: '12th grade drumline'},
      {instrument: '6th bass', time: 'Freshman year drumline'},
      {instrument: '9th bass', time: 'Sophomore year drumline'},
      {instrument: '8th bass', time: 'Junior year drumline'},
      {instrument: 'Drumset', time: '2012 - Present'},
      {instrument: 'Bass guitar', time: '2012 - Present'},
      {instrument: 'Guitar', time: '2014 - Present'},
      {instrument: 'Singing', time: 'My whole life'}
    ];
  }
}
