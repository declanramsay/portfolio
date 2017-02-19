import Ember from 'ember';

const {
  Component,
} = Ember;

const PROJECTS_DATA = [
  {
    id: 'media-project',
    title: 'Media Project',
    // link: 'http://www.tvnz.co.nz/shows/my-kitchen-rules-australia',
    image: {
      src: '../assets/images/tvnz-tile.jpg',
      alt: 'media-project',
    },
    summary: 'testing',
    tags: ['Web Development'],
    date: 'September 2016 - March 2017',
    media: [],
  },
  {
    id: 'the-co-operative-bank',
    title: 'The Co-operative Bank',
    link: 'https://www.co-operativebank.co.nz',
    image: {
      src: '../assets/images/co-op-tile.jpg',
      alt: 'The Co-operative Bank',
    },
    summary: '',
    tags: ['Web Development'],
    date: '',
    media: [],
  },
  {
    id: 'lucid-effect-national-tour',
    title: 'Lucid Effect National Tour',
    image: {
      src: '../assets/images/national-tour-auckland.jpg',
      alt: 'National Tour',
    },
    summary: '',
    tags: ['Event Planning', 'Design'],
    date: '',
    media: [],
  },
  {
    id: 'what-are-you-voting-for',
    title: 'What Are You Voting For?',
    image: {
      src: '../assets/images/engagement.jpg',
      alt: 'What Are You Voting For',
    },
    summary: '',
    tags: ['Design', 'Event Planning', 'Web Development'],
    date: 'June 2014 - September 2014',
    media: [],
  },
  {
    id: 'event-poster-design',
    title: 'Event Poster Design',
    image: {
      src: '../assets/images/event-poster-tile.jpg',
      alt: 'Poster of a hand emerging from a business manʻs neck',
    },
    summary: '',
    tags: ['Design'],
    date: 'Ongoing',
    media: [],
  },
];

export default Component.extend({
  projects: PROJECTS_DATA,
  // classNames: ['row'],
});
