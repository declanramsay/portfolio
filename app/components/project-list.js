import Ember from 'ember';

const {
  Component,
} = Ember;

const PROJECTS_DATA = [
  {
    id: 'tvnz-single-site',
    title: 'TVNZ Single Site',
    link: 'http://www.tvnz.co.nz/shows/my-kitchen-rules-australia',
    image: {
      src: 'assets/images/tvnz-single-site.png',
      alt: 'TVNZ Single Site',
    },
    summary: 'testing',
    tags: ['Ember', 'JavaScript', 'Web Development'],
    date: 'September 2016 - March 2017',
    media: [],
  },
  {
    id: 'the-co-operative-bank',
    title: 'The Co-operative Bank',
    link: 'https://www.co-operativebank.co.nz',
    summary: '',
    tags: [],
    date: '',
    media: [],
  },
  {
    id: 'lucid-effect-national-tour',
    title: 'Lucid Effect National Tour',
    image: '',
    summary: '',
    tags: [],
    date: '',
    media: [],
  },
];

export default Component.extend({
  projects: PROJECTS_DATA,
});
