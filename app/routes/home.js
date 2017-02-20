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
    title: 'TVNZ Single Site',
    leadImage: {
      src: '../assets/images/tvnz-tile.jpg',
      alt: 'TVNZ',
    },
    description: '<p>A thorough redesign and build of TVNZ combined their previously built On Demand experience and their seperate show information site in to a single platform. I worked extensively throughout the codebase, particularly on their Authentication and login/register flows, implementing their advertising solution, favouriting, and internal resolution of layout and module information provided by the API.</p> <p>For this project I also lead the team in embracing a style guide enforced by Dockyard\'s ember-suave ruleset. Implementing this style meant we had a consistent codebase which was easier to maintain and introduce other dev\'s to. We also used TDD practices in building the internal layout resolution and Advertising.</p>',
    tags: ['Web Development'],
    date: 'September 2016 - March 2017',
    images: [],
    links: [
      {
        title: 'TVNZ',
        url: 'https://tvnz.co.nz',
      },
    ],
    skills: ['Ember', 'REST', 'Javascript', 'Git', 'JIRA', 'TDD', 'Styleguide', 'GPT', 'Agile'],
  },
  {
    id: 'the-co-operative-bank',
    title: 'The Co-operative Bank',
    link: 'https://www.co-operativebank.co.nz',
    leadImage: {
      src: '../assets/images/co-op-tile.jpg',
      alt: 'The Co-operative Bank',
    },
    description: '<p>I was a team member of the development of The Co-operative Bank\'s new online banking platform. Instead of sandboxing the internet banking experience and marketing site, The Co-operative Bank\'s has both on a singular platform, allowing users to see their information without fully logging-in, and to traverse freely between their accounts and offers. This meant that information on the marketing side could be more targetted to their users\' financial situation.</p><p>Working closely with The Co-operative Bank\'s developers I got to experience many aspects of development and I worked on both their initial release and subsequent feature cycles. I eventually stepped up to a more lead-like role on a number of their flows such as Overdraft and Personal Loan origination, as well as the Join Us and Change Account flows.</p>',
    tags: ['Web Development'],
    date: 'January 2015 - August 2016',
    images: [],
    links: [
      {
        title: 'The Co-operative Bank Website',
        url: 'https://co-operativebank.co.nz',
      },
    ],
    skills: ['Ember', 'Sass', 'REST', 'Javascript', 'Git', 'Trello', 'Sifter', 'Agile'],
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
        src: '../assets/images/national-tour-posed.jpg',
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
    description: '<p>In my capacity as Engagement Vice-President I lead the Engagement team in a series of events around the 2014 New Zealand Election. People aged 24 and under are the least likely to vote and make up the vast majority of the student population. I built a simple website with Wordpress that allowed students to highlight the issues important to them, which became the focus topics of a panel we held on campus with the Tertiary Spokespeople from the major parties. Attendance for this event vastly exceed expectations with over 600 students attending. We also partnered with the Electoral Commission to have an early voting station on campus in the 2 weeks leading up to the election.</p> <p>Ultimately, over 4000 students voted early on campus with an overall increase in Under-24 in Wellington voting from the previous election.</p>',
    tags: ['Design', 'Event Planning', 'Web Development'],
    date: 'June 2014 - September 2014',
    images: [],
    skills: ['Management', 'Planning', 'Budgeting', 'Wordpress', 'CSS3'],
  },
  {
    id: 'event-poster-design',
    title: 'Event Poster Design',
    leadImage: {
      src: '../assets/images/event-poster-tile.jpg',
      alt: 'Poster of dangling lightbulbs',
    },
    description: '<p>Both for myself and for events I\'ve organised, I have designed posters for shows since 2010.</p>',
    tags: ['Design'],
    date: 'Ongoing',
    images: [],
    skills: ['Creativity', 'Adobe CC'],
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
