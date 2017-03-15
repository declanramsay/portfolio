import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

const skills = [
  {
    label: 'HTML 5',
    isActive: false,
    description: 'Including Web Storage, File API, and <video>',
  },
  {
    label: 'CSS 3',
    isActive: false,
  },
  {
    label: 'SASS',
    isActive: false,
  },
  {
    label: 'JavaScript',
    isActive: false,
    description: 'Including ES2016 ',
  },
  {
    label: 'Ember',
    isActive: false,
  },
  // {
  //   label: 'NodeJS',
  //   isActive: false,
  // },
  {
    label: 'Responsive Web',
    isActive: false,
  },
  {
    label: 'Git SCM',
    isActive: false,
  },
  {
    label: 'Agile',
    isActive: false,
  },
];

export default Component.extend({
  skills,

  actions: {
    toggleSkill(skill) {
      set(skill, 'isActive', !skill.isActive);
    },
  },
});
