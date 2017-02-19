import Ember from 'ember';

const {
  Route,
  RSVP: {
    hash,
    resolve,
  },
} = Ember;

const MOCK_ITEM = {
  id: 'lucid-effect-national-tour',
  title: 'Lucid Effect National Tour',
  leadImage: {
    src: '../assets/images/national-tour-auckland.jpg',
    alt: 'National Tour',
  },
  description: '<p>In 2016, after the release of my single <i>Gretchen Ross</i> I embarked on a solo tour of New Zealand, with fellow musician Emily Riordan in support. Spread over 5 cities, we performed to hundreds of people and travelled all the way from Auckland to Dunedin.</p> <p>Despite being our debut tour, our first time performing in the South Island, and being entirely self-organised we were very successful and broke even by tour\'s end.</p>',
  links: [
    {
      title: 'Second Hand News',
      url: 'http://www.secondhandnews.nz/news--reviews/lucid-effect-national-tour',
    },
    {
      title: '13th Floor',
      url: 'https://www.13thfloor.co.nz/?p=71593',
    },
    {
      title: 'Muzic.net.nz',
      url: 'http://www.muzic.net.nz/news/5619/lucid-effect-announces-national-tour.html',
    },
    {
      title: 'Taranaki Daily News',
      url: 'http://www.stuff.co.nz/taranaki-daily-news/news/82717344/new-plymouth-musician-lucid-effect-sets-sail-for-national-tour',
    },
  ],
  tags: ['Event Planning', 'Design'],
  date: 'August 2016',
  images: [
    {
      src: '../assets/images/national-poster.jpg',
      alt: 'National Tour',
    },
    {
      src: '../assets/images/national-tour-performing.jpg',
      alt: 'National Tour',
    },
    {
      src: '../assets/images/national-tour-lead.jpg',
      alt: 'National Tour',
    },
  ],
  skills: ['Management', 'Planning', 'Budgeting', 'Promotion', 'Advertising', 'Performing', 'Creativity', 'Press'],
};

export default Route.extend({
  model() {
    return hash({
      project: resolve(MOCK_ITEM),
    });
  },

  activate() {
    this._super();
    window.scrollTo(0, 0);
  },
});
