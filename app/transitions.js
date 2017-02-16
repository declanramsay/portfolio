export default function() {
  this.transition(
    this.fromRoute('home'),
    this.use('explode', {
      matchBy: 'data-image-id',
      use: ['fly-to', { duration: 600, easing: 'easeOutQuart' }],
    }, {
      use: ['fade', { duration: 300 }],
    }),
    this.reverse('fade')
  );
}
