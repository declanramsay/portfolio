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
    src: '../assets/images/engagement.jpg',
    alt: 'National Tour',
  },
  images: [
    {
      src: '../assets/images/engagement.jpg',
      alt: 'National Tour',
    },
    {
      src: '../assets/images/engagement.jpg',
      alt: 'National Tour',
    },
    {
      src: '../assets/images/engagement.jpg',
      alt: 'National Tour',
    },
  ],
  summary: '',
  tags: ['Event Planning', 'Design'],
  date: 'August 2016',
  media: [],
};

export default Route.extend({
  model() {
    return hash({
      project: resolve(MOCK_ITEM),
    });
  },
});
