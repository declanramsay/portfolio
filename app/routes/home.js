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
    description: '',
    tags: ['Event Planning', 'Design'],
    date: '',
    images: [],
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
