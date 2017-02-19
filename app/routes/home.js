import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
  RSVP: {
    hash,
    resolve,
  },
} = Ember;

// TODO tidy
const LASTFM_KEY = '45c2ed86bea3e8d841b7d430ba0e605e';
const LASTFM_ENDPOINT = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=3&user=lucideffective&api_key=${LASTFM_KEY}&format=json`;
// Need a latest-run endpoint?
const ZOMBIESRUN_ENDPOINT = 'https://api.zombiesrungame.com/runs/11352204/';

const PROJECTS_DATA = [
  {
    id: 'media-project',
    title: 'Media Project',
    leadImage: {
      src: '../assets/images/tvnz-tile.jpg',
      alt: 'media-project',
    },
    description: 'testing',
    tags: ['Web Development'],
    date: 'September 2016 - March 2017',
    images: [],
  },
  {
    id: 'the-co-operative-bank',
    title: 'The Co-operative Bank',
    link: 'https://www.co-operativebank.co.nz',
    leadImage: {
      src: '../assets/images/co-op-tile.jpg',
      alt: 'The Co-operative Bank',
    },
    description: '',
    tags: ['Web Development'],
    date: '',
    images: [],
  },
  {
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
  },
  {
    id: 'what-are-you-voting-for',
    title: 'What Are You Voting For?',
    leadImage: {
      src: '../assets/images/engagement.jpg',
      alt: 'What Are You Voting For',
    },
    description: '',
    tags: ['Design', 'Event Planning', 'Web Development'],
    date: 'June 2014 - September 2014',
    images: [],
  },
  {
    id: 'event-poster-design',
    title: 'Event Poster Design',
    leadImage: {
      src: '../assets/images/event-poster-tile.jpg',
      alt: 'Poster of a hand emerging from a business manʻs neck',
    },
    description: '',
    tags: ['Design'],
    date: 'Ongoing',
    images: [],
  },
];

export default Route.extend({
  api: service(),

  model() {
    let api = get(this, 'api');

    let hashOfPromises = {
      projects: resolve(PROJECTS_DATA),
      // TODO move social-calls to service (don't hold up site for)
      recentTracks: api.fetch(LASTFM_ENDPOINT).then((response) => response.recenttracks),
      run: api.fetch(ZOMBIESRUN_ENDPOINT).then((response) => response),
    };

    return hash(hashOfPromises);
  },
});
