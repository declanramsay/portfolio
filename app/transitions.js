export default function() {
  this.transition(
    this.fromRoute('home'),
    this.use('explode', {
      matchBy: 'data-image-id',
      use: ['fly-to', { duration: 500 }],
      // use: ['fly-to', { duration: 1000, easing: 'easeOutQuart' }],
    }, {
      use: ['fade', { duration: 500 }],
    }),
    this.reverse('fade')
  );
}
