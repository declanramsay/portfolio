import fetch from 'ember-network/fetch';
// eslint-disable-next-line no-unused-vars
export default function dynamicSegmentResolver(dynamicSegmentKey, allSegments, otherDynamicSegments) {

  // /**
  //  * Uncomment the line below and open localhost:4200/sitemap.txt on your browser.
  //  * You will see what parameters are passed to this function in the console.
  //  */
  // console.log('dynamicSegmentResolver:', dynamicSegmentKey, allSegments, otherDynamicSegments);

  if(dynamicSegmentKey === 'projectId') {
    return fetch(`https://personal-portfolio-b7670.firebaseio.com/projects/${otherDynamicSegments.projectId}.json`)
      .then((response) => response.json());
  }
  return [];
}
