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
  description: '',
  tags: ['Event Planning', 'Design'],
  date: 'August 2016',
};

export default Route.extend({
  model() {
    return hash({
      project: resolve(MOCK_ITEM),
    });
  },
});
